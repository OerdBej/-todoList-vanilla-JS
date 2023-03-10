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
  document.addEventListener("DOMContentLoaded", getTasks);
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearTasks);
  filter.addEventListener("keyup", filterTasks);
}

// get all the tasks and loop through.
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  //loop through each local storage and add it to the DOM
  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(task));
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    //append the li to the UI
    taskList.appendChild(li);
  });
}

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

  //localStorage: get the data from user input

  storeTaskInLocalStorage(taskInput.value);

  //reset the input value to empty string
  taskInput.value = "";
  e.preventDefault();
}

//local storage give us string, so we use the method
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("task") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//using the event delegation to target the parent.

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure")) {
      // targeting the parent of the parent to remove
      e.target.parentElement.parentElement.remove();
      //remove that from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task, index) {
    if (task.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//clear the innerHTML tasks list
function clearTasks() {
  taskList.innerHTML = "";

  //clear task from the local storage
  clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage() {
  localStorage.clear();
}

//fLoop through each node list created.

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  //the li list that we created is a node list, so we use forEach
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      taskList.getElementsByClassName.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
