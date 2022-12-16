//defining in the global scope the variable

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// load the event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners() {
  form.addEventListener("submit", addTask);
}

//add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("⭕️Add task⭕️");
  }

  e.preventDefault();
}
