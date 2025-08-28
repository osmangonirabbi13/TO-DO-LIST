function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
}

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  const submitButton = document.getElementById("addTodo");

  //submit a button

  submitButton.addEventListener("click", (event) => {
    const todoText = todoInput.value;

    if (todoText === " ") {
      alert("please somthings for the todo");
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
