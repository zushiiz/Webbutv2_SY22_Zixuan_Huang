let taskCounter = 0;

function addTask(){

  taskCounter++;

  const newTask = document.createElement("li");
  newTask.classList.add("list-style");
  newTask.id=`task${taskCounter}`;
  document.getElementById("task-list").appendChild(newTask);

  const textField = document.createElement("input");
  textField.type = "text";
  textField.value = "Write your task here!";
  newTask.appendChild(textField);

  textField.addEventListener("focus", function() {
    if (this.value === "Write your task here!") {
        this.value = "";
    }
  });

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id=`checkbox${taskCounter}`;
  newTask.appendChild(checkBox)

  const delButton = document.createElement("button");
  delButton.innerText = "x";
  newTask.appendChild(delButton);
  
}

function removeTask(taskId){
  const removedTask = document.getElementById(taskId);
  removedTask.remove();
}
