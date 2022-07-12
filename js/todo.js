const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let toDos = [];


function saveTodos(){
    localStorage.setItem("todoDate",JSON.stringify(toDos));
}

function delHandler(event){
    const li = event.target.parentElement;
    li.remove();
}

function painTodo(newTodo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    span.innerText = newTodo;
    button.innerText = "❤";
    button.addEventListener("click",delHandler)
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
}
function todoFormHandle(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value ="";
    toDos.push(newTodo);
    painTodo(newTodo);
    saveTodos();
}

todoForm.addEventListener("submit", todoFormHandle);

const savedTodo = localStorage.getItem("todoDate");

if ( saveTodos !== null) {
    const parseTodos = JSON.parse(savedTodo);
    toDos = parseTodos;
    parseTodos.forEach(painTodo);
}