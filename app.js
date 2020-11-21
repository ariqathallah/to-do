// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions
function addTodo(e) {
  // cegah form dari submitting -> karena button-nya ada type submit
  e.preventDefault();
  // buat div baru dengan kelas "todo"
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // buat tag
  const todoItem = document.createElement("li");
  // inner text tag li diambil dari inputan pengguna pada tag input dg kelas todo-input
  todoItem.innerText = todoInput.value;
  // beri tag li tadi kelas "todo-item"
  todoItem.classList.add("todo-item");
  // masukkan todoItem sebagai anak dari todoDiv
  todoDiv.appendChild(todoItem);
  // buat checked button
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.classList.add("complete-btn");
  todoDiv.appendChild(completedBtn);
  // buat trash button
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add("trash-btn");
  todoDiv.appendChild(trashBtn);
  // kalau dah selesai semua, tambahkan todoDiv menjadi anak dari tag ul todo-list
  todoList.appendChild(todoDiv);
  /* setelah inputan dimasukkan pengguna,
  kemudian ditampilkan ke dalam list tag li todo-list,
  inputan yang di tag input tadi langsung dihapus*/
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  const todo = item.parentElement;
  // Delete item
  if (item.classList.contains("trash-btn")) {
    // animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // Check mark
  if (item.classList.contains("complete-btn")) {
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
