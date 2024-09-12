let taskCounter = 0;

function addTask(){

  taskCounter++;

  const newTask = document.createElement("li");
  newTask.classList.add("list-style");
  newTask.id=`task${taskCounter}`;
  document.getElementById("task-list").appendChild(newTask);

  console.log(newTask.id);

  const taskNumber = document.createElement("p");
  taskNumber.innerText = taskCounter;
  newTask.appendChild(taskNumber);

  const textField = document.createElement("span");
  textField.role = "textbox";
  textField.setAttribute("contenteditable", "true");

  textField.textContent = "Write your task here!";
  textField.id=`text${taskCounter}`;
  newTask.appendChild(textField);

  textField.addEventListener("focus", function() {
    if (this.textContent === "Write your task here!") {
        this.textContent = "";
    }
  });

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("checkbox-style");
  checkBox.addEventListener("change", function(event) {
    checked(event, newTask.id, textField.id);
  });
  newTask.appendChild(checkBox);

  const delButton = document.createElement("button");
  delButton.innerText = "x";
  delButton.onclick = function () {
    popupConfirmation(newTask.id);
  };
    newTask.appendChild(delButton);

}

function removeTask(taskId){
  const removedTask = document.getElementById(taskId);
  removedTask.remove();
  removePopup();

  if (document.querySelector("li")) {
    console.log("exists");
  } else{
    taskCounter = 0;
  }

}

function checked(event, taskId, textField){
  const checkBox = event.target;
  const task = document.getElementById(taskId);
  const text = document.getElementById(textField);

  if (checkBox.checked) {
    task.classList.add("checked");
    text.setAttribute("contenteditable", "false");
  } else {
    task.classList.remove("checked")
    text.setAttribute("contenteditable", "true");
  }
}

function popupConfirmation(taskId){
  const screen = document.body;

  const popup = document.createElement("div");
  popup.id= "confirmation-popup";
  popup.classList.add("popup-cover");

  const popupBox = document.createElement("div");
  popupBox.classList.add("popup-style");

  const confText = document.createElement("span");
  confText.innerText = `Delete ${taskId}?`;
  popupBox.appendChild(confText);

  const butCont = document.createElement("div");
  butCont.classList.add("button-container");

  const declineButton = document.createElement("button");
  declineButton.innerText = "Decline"
  declineButton.onclick = function () {
    removePopup();
  };

  const acceptButton = document.createElement("button");
  acceptButton.innerText = "Accept"
  acceptButton.onclick = function () {
    removeTask(taskId);
  };

  butCont.appendChild(acceptButton);
  butCont.appendChild(declineButton);

  popupBox.appendChild(butCont);
  popup.appendChild(popupBox);
  screen.appendChild(popup)

}

function removePopup(){
  const popup = document.getElementById("confirmation-popup");
  popup.remove();
}