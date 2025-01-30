var player1;
var playerInput = {};
var p1Score;
var p2Score;
const canvasW = 1000;
const canvasH = canvasW * 0.6;

function startGame(){
  player1 = new playerObject(30, 100, 10, canvasH/2);
  player2 = new playerObject(30, 100, 960,canvasH/2);
  p1Score = 0;
  p2Score = 0;
  document.getElementById("player1").innerHTML = p1Score;
  document.getElementById("player2").innerHTML = p2Score;
  ball = new ballObject(30, 30, canvasW/2, canvasH/2);
  gameArea.start();
}

var gameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = canvasW;
    this.canvas.height = canvasH;
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
  p1Inputs(player1);
  p2Inputs(player2);
  player1.updatePosition();
  player1.update();
  player2.updatePosition();
  player2.update();
  ball.updatePosition();
  ball.update();
  ball.bounceX();
  ball.bounceY();
  score();
}

function playerObject(w, h, x, y){
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

function ballObject(w, h, x, y){
  this.width = w;
  this.height = h;
  this.speedY = 0;
  this.speedX = 5;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = gameArea.context;
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.updatePosition = function() {
    this.y += this.speedY;
    this.x += this.speedX;
  }
  this.bounceX = function() {
    if (collision(player1, ball) || collision(player2, ball)){
      this.speedX *= -1;
      if (this.speedX > 0){
        this.speedX += 0.1;
      } else{
        this.speedX -= 0.1;
      }
      this.speedY = Math.floor(Math.random() * 10);
    }
  }
  this.bounceY = function() {
    if (this.y > (canvasH - this.width) || 
    this.y < 0 ||
    collision(player1, ball) ||
    collision(player2, ball)
    ){
      this.speedY *= -1;
    }
  } 
}

function score(){
  if (ball.x > canvasW) {
    p1Score += 1;
    document.getElementById("player1").innerHTML = p1Score;
  } 
  else if (ball.x < -ball.width){
    p2Score += 1;
    document.getElementById("player2").innerHTML = p2Score;
  }
  if(ball.x > canvasW || 
    ball.x < -ball.width){
      ctx.clearRect(0, 0, canvasW, canvasH);
      player1 = new playerObject(30, 100, 10, canvasH/2);
      player2 = new playerObject(30, 100, 960,canvasH/2);
      ball = new ballObject(30, 30, canvasW/2, canvasH/2);
      if (p1Score > p2Score) { // doesnt work
        ball.speedX * -1;
      }
    }
}

function p1Inputs(p){
  if (playerInput["w"] && p.y > 0){
    p.speedY = -10;
  }
  else if (playerInput["s"] && p.y < (canvasH - p.height)){
    p.speedY = 10;
  }
  else{
    p.speedY = 0;
  }
}

function p2Inputs(p){
  if (playerInput["ArrowUp"] && p.y > 0){
    p.speedY = -10;
  }
  else if (playerInput["ArrowDown"] && p.y < (canvasH - p.height)){
    p.speedY = 10;
  }
  else{
    p.speedY = 0;
  }
}

function collision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}


function keyDown(e){
  return playerInput[e.key] = true;
}
function keyUp(e){
  return playerInput[e.key] = false;
}

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);