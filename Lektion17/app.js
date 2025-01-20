function pacman(){
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  
  const cS = 0.2*Math.PI;
  const cE = 1.8*Math.PI;
  const cR = 100;
  const cX = 300;
  const cY = 300;

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(cX, cY, cR, cS, cE);
  
  ctx.moveTo(cX, cY);
  ctx.lineTo((cX + cR * Math.cos(cS)), (cX + cR * Math.sin(cS)));
  
  ctx.moveTo(cX, cY);
  ctx.lineTo((cX + cR * Math.cos(cE)), (cY + cR * Math.sin(cE)));
  
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(280, 260, 20, 0, 2*Math.PI);
  ctx.stroke(); 
}

pacman();