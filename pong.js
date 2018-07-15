const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

var arena = new Arena(context,canvas.width,canvas.height);
var player = new Player(10,70,5,canvas.width,canvas.height,false);
var enemy = new Player(10,70,5,canvas.width,canvas.height,true);
var ball = new Ball(8,canvas.width,canvas.height);

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
    player.update(ball);
    enemy.update(ball);
    let result=ball.move(player,enemy);
    if(result==1){
      player.score++;
    }else if(result==-1){
      enemy.score++;
    }
}

function draw(){
  arena.draw(player.score,enemy.score);
  ball.draw(context);
  player.draw(context);
  enemy.draw(context);
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

init(30);
