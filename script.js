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
  taskList.addEventListener("click", removeTask);
}
// load the event listeners
loadEventListeners();
//add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("⭕️Add task⭕️");
  }

  //create and append the list. className from materialize
  const li = document.createElement("li");
  li.className = "collection-item";
  li.appendChild(document.createTextNode(taskInput.value));
  console.log(li);

  // creating the link
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  //append the li to the UI
  taskList.appendChild(li);

  //reset the input value to empty string
  taskInput.value = "";
  e.preventDefault();
}

//using the event delegation to target the parent.

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    // targeting the parent of the parent to remove
    e.target.parentElement.parentElement.remove();
  }
}
