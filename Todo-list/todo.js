let taskCounter = 0;

function addTask(){

  taskCounter++;

  const newTask = document.createElement("li");
  newTask.classList.add("list-style");
  newTask.id=`task${taskCounter}`;
  document.getElementById("task-list").appendChild(newTask);

  console.log(newTask.id);

  const taskNumContainer = document.createElement("p");

  const openBracket = document.createElement("span");
  openBracket.innerText = "<";
  openBracket.classList.add("bracket-style");
  const taskNumber = document.createElement("span");
  taskNumber.innerText = taskCounter;
  const closedBracket1 = document.createElement("span");
  closedBracket1.innerText = ">";
  closedBracket1.classList.add("bracket-style");

  taskNumContainer.appendChild(openBracket);
  taskNumContainer.appendChild(taskNumber);
  taskNumContainer.appendChild(closedBracket1);

  newTask.appendChild(taskNumContainer);

  const textField = document.createElement("span");
  textField.role = "textbox";
  textField.setAttribute("contenteditable", "true");
  textField.setAttribute("spellcheck", "false");

  textField.textContent = "Write your task here!";
  textField.id=`text${taskCounter}`;
  newTask.appendChild(textField);

  textField.addEventListener("focus", function() {
    if (this.textContent === "Write your task here!") {
        this.textContent = "";
    }
  });

    const taskNumContainer2 = document.createElement("p");

    const openBracket2 = document.createElement("span");
    openBracket2.innerText = "<";
    openBracket2.classList.add("bracket-style");
    const taskNumber2 = document.createElement("span");
    taskNumber2.innerText = taskCounter;
    const closedBracket2 = document.createElement("span");
    closedBracket2.innerText = "/>";
    closedBracket2.classList.add("bracket-style");
  
    taskNumContainer2.appendChild(openBracket2);
    taskNumContainer2.appendChild(taskNumber2);
    taskNumContainer2.appendChild(closedBracket2);
  
    newTask.appendChild(taskNumContainer2);

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
  screen.appendChild(popup);

}

function removePopup(){
  const popup = document.getElementById("confirmation-popup");
  popup.remove();
}