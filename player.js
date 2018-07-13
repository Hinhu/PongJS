class Player{
  constructor(playerW, playerH, speed, screenH){
    this.y=screenH/2-playerH/2;
    this.screenH=screenH;
    this.width=playerW;
    this.height=playerH;
    this.speed=speed;
    this.goingDown=false;
    this.goingUp=false;
  }

  draw(c){
    c.fillStyle="#FFFFFF";
    c.fillRect(0,this.y,this.width,this.height);
  }

  update(){
    if(this.goingUp && this.y>=0){
      this.y-=this.speed;
    }else if(this.goingDown && this.y+this.height<=this.screenH){
      this.y+=this.speed;
    }
  }

  stop(){
    this.goingUp=false;
    this.goingDown=false;
  }

  goUp(){
    this.goingUp=true;
    this.goingDown=false;
  }

  goDown(){
    this.goingUp=false;
    this.goingDown=true;
  }
}
