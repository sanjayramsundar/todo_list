//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todos");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodos);

//Functions
//this shit adds the to items
function addTodo(event) {
  //Prevent page form refreshing
  event.preventDefault();

  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create List
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Checked Button
  const checkedButton = document.createElement("button");
  checkedButton.innerHTML = '<i class="fas fa-check"></i>';
  checkedButton.classList.add("checked-btn");
  todoDiv.appendChild(checkedButton);
  //Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);
  //Append to List
  todoList.appendChild(todoDiv);
  //Clear Todo Input Value
  todoInput.value = "";
}

//this shit check and removes the todo items
function deleteCheck(e) {
  const item = e.target;
  //Delete Todo item
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.classList.add("del");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //checks todo item
  if (item.classList[0] === "checked-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("checked");
  }
}

// this shit filters the todo items
function filterTodos(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("checked")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("checked")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
