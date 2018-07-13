const canvas=document.getElementById('pong');
const context=canvas.getContext('2d');

var player=new Player(10,50,5,canvas.height);

var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

function init(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}


function animate() {
    if (stop) {
        return;
    }
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        update();
        draw();
    }
}

function update(){
    player.update();
}

function draw(){
  drawArena();
  player.draw(context);
}

function drawArena(){
  context.fillStyle="#000000";
  context.fillRect(0,0,canvas.width,canvas.height);
}

document.addEventListener('keydown', event=>{
  if(event.keyCode===38){
    player.goUp();
  }else if(event.keyCode===40){
    player.goDown();
  }
});

document.addEventListener('keyup', event=>{
  if(event.keyCode===38 || event.keyCode===40){
    player.stop();
  }
});

init(60);
