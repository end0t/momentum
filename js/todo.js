const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

const TODO_DATA = "todoDate";

function saveTodos(){
    localStorage.setItem(TODO_DATA,JSON.stringify(toDos));
}

function delHandler(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function painTodo(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    const button = document.createElement('button');
    span.innerText = newTodo.text;
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
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);
    painTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", todoFormHandle);

const savedTodo = localStorage.getItem(TODO_DATA);

if (savedTodo) {
    const parseTodos = JSON.parse(savedTodo);
    toDos = parseTodos;
    parseTodos.forEach(painTodo);
} else {
    
}


console.log(saveTodos);