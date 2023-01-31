//variables
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");
const container = document.getElementsByClassName("container");
//Event listener for add button
addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");
  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  //checkButton
  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"</i> ';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"</i> ';
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);
  if (inputTask.value === "") {
    alert("Please Enter a Task");
  } else {
    container[0].appendChild(task);
  }
  inputTask.value = "";
  checkButton.addEventListener("click", function () {
    if (checkButton.parentElement.style.textDecoration != "line-through") {
      checkButton.parentElement.style.textDecoration = "line-through";
    } else {
      checkButton.parentElement.style.textDecoration = "none";
    }
  });
  deleteButton.addEventListener("click", function () {
    deleteButton.parentElement.remove();
  });
});
