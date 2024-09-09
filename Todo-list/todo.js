let taskCounter = 0;

function addTask(){

  taskCounter++;

  const newTask = document.createElement("li");
  newTask.classList.add("list-style");
  newTask.id=`task${taskCounter}`;
  document.getElementById("task-list").appendChild(newTask);

  console.log(newTask.id);

  const textField = document.createElement("input");
  textField.type = "text";
  textField.value = "Write your task here!";
  textField.id=`text${taskCounter}`;
  textField.readOnly = false;
  newTask.appendChild(textField);

  textField.addEventListener("focus", function() {
    if (this.value === "Write your task here!") {
        this.value = "";
    }
  });

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.addEventListener("change", function(event) {
    checked(event, newTask.id, textField.id);
  });
  newTask.appendChild(checkBox);

  const delButton = document.createElement("button");
  delButton.innerText = "x";
  delButton.onclick = function () {
    removeTask(newTask.id);
  };
    newTask.appendChild(delButton);
}

function removeTask(taskId){
  const removedTask = document.getElementById(taskId);
  removedTask.remove();
}

function checked(event, taskId, textField){
  const checkBox = event.target;
  const task = document.getElementById(taskId);
  const text = document.getElementById(textField);

  if (checkBox.checked) {
    task.classList.add("checked");
    text.readOnly = true;

  } else {
    task.classList.remove("checked")
    text.readOnly = false;

  }
}