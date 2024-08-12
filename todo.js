document.addEventListener("DOMContentLoaded", loadTodos);

const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);


function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => createTodoElement(todo));
}

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
        const todo = { id: Date.now(), text: todoText };
        createTodoElement(todo);
        saveTodoToStorage(todo);
        todoInput.value = "";
    }
    else{
        alert("Please enter a task")
    }
}

function createTodoElement(todo) {
    const li = document.createElement("li");
    li.id = todo.id;

    const span = document.createElement("span");
    span.textContent = todo.text;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => editTodo(todo.id, span));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id, li));

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
}

function saveTodoToStorage(todo) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function editTodo(id, spanElement) {
    const newText = prompt("Edit your task:", spanElement.textContent);
    if (newText) {
        spanElement.textContent = newText;
        const todos = JSON.parse(localStorage.getItem("todos"));
        const todo = todos.find(t => t.id === id);
        todo.text = newText;
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}

function deleteTodo(id, liElement) {
    liElement.remove();
    const todos = JSON.parse(localStorage.getItem("todos"));
    const updatedTodos = todos.filter(t => t.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
}
