var player1;
var playerInput = {};

function startGame(){
  player1 = new gameObject(30, 30, 10, 120);
  gameArea.start();
}

var gameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 500;
    this.canvas.height = 500;
    this.context = this.canvas.getContext("2d");
    document.getElementById("game-container").appendChild(this.canvas);
    this.interval = setInterval(gameUpdate, 20);
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function gameUpdate(){
  gameArea.clear();
  inputs();
  player1.updatePosition();
  player1.update();
}

function gameObject(w, h, x, y){
  this.width = w;
  this.height = h;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = gameArea.context;
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.updatePosition = function() {
    this.y += this.speedY;
  }
}

function moveup() {
  player1.speedY = -1; 
}

function movedown() {
  player1.speedY = 1; 
}

function inputs(e){

  if (playerInput["w"]){
    console.log("w");
    player1.speedY = -1;
  }
  else if (playerInput["s"]){
    player1.speedY = 1;
  }
  else{
    console.log("stop");
    player1.speedY = 0;
  }

}

function keyDown(e){
  console.log("press");
  return playerInput[e.key] = true;
}
function keyUp(e){
  console.log("release");
  return playerInput[e.key] = false;
}

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);