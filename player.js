class Player{
  constructor(playerW, playerH, speed, screenW, screenH, isEnemy){
    this.y=screenH/2-playerH/2;
    this.screenH=screenH;
    this.screenW=screenW;
    this.width=playerW;
    this.height=playerH;
    this.speed=speed;
    this.goingDown=false;
    this.goingUp=false;
    this.score=0;
    this.isEnemy=isEnemy;
  }

  draw(c){
    c.fillStyle="#FFFFFF";
    if(!this.isEnemy){
      c.fillRect(0,this.y,this.width,this.height);
    }else{
      c.fillRect(this.screenW-this.width,this.y,this.width,this.height);
    }
  }

  update(b){
    if(!this.isEnemy){
      if(this.goingUp && this.y>=0){
        this.y-=this.speed;
      }else if(this.goingDown && this.y+this.height<=this.screenH){
        this.y+=this.speed;
      }
    }else{
      let margin=3;
      if((this.y+this.height)/2 +3<(b.y+b.a)/2 && this.y+this.height-5<=this.screenH){
        this.y+=this.speed;
      }else if ((this.y+this.height)/2>(b.y+b.a)/2 && this.y>=0) {
        this.y-=this.speed;
      }
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
