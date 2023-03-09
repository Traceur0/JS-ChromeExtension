const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODO_KEY = "TODO"

const todoContainer = [];



function saveTodo() {
    localStorage.setItem(TODO_KEY, todoContainer);
}

function onDelBtnClick(event) {
    const li = event.target.parentElement;
    li.remove();
}

function onCheckBtnClick(event) {
    const span = event.target.parentElement.firstElementChild;
    // TypeError: Cannot read properties of undefined
    var cancelLine = span.style.textDecorationLine
    // .... 
    if (cancelLine !== "line-through") {
        console.log(cancelLine)
        cancelLine = "none";
    } else if (cancelLine === "line-through") {
        console.log(cancelLine)
        cancelLine = "line-through";
    }
}

function createTodo(newTodo) {
    // HTML 요소 생성
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const checkBtn = document.createElement("button");
    checkBtn.innerText = "✔";
    const delBtn = document.createElement("button");
    delBtn.innerText = "✖";

    // 배치
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(checkBtn);
    li.appendChild(delBtn);

    // 버튼 상호작용 동작 이벤트리스너
    checkBtn.addEventListener("click", onCheckBtnClick);
    delBtn.addEventListener("click", onDelBtnClick);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todoContainer.push(newTodo)
    createTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);


const savedTodo = localStorage.getItem(TODO_KEY);

if (savedTodo) {

}