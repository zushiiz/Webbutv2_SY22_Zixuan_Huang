let taskCounter = 0;

function addTask(){

  taskCounter++;

  const newTask = document.createElement("li");
  newTask.classList.add("list-style");
  document.getElementById("task-list").appendChild(newTask);

  const textField = document.createElement("input");
  textField.type = "text";
  textField.value = "Write your task here!";
  newTask.appendChild(textField);

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id=`checkbox${taskCounter}`;
  newTask.appendChild(checkBox)
}
