function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  return todos;
}

function addTodoToLocalStorage(todoText) {
  const todos = loadTodos();
  todos.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function appendTodoInHtmal() {
  const todoList = document.getElementById("todoList");
  const todo = document.createElement("li");
  todoList.appendChild(todo);
}

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  const submitButton = document.getElementById("addTodo");

  //submit a button

  submitButton.addEventListener("click", (event) => {
    const todoText = todoInput.value;
    if (todoText == "") {
      alert("please somthings for the todo");
    } else {
      addTodoToLocalStorage(todoText);
    }
  });

  //input button

  todoInput.addEventListener("change", (event) => {
    //this is called back method
    const todoText = event.target.value;
    event.target.value = todoText.trim();
    console.log(event.target.value);
  });
  loadTodos();
});
