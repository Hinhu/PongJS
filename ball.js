class Ball{
  constructor(a,screenW,screenH){
    this.a=a;
    this.x=screenW/2-a/2;
    this.y=screenH/2-a/2;
    this.speedX=3;
    this.speedY=0;
    this.goingRight=false;
    this.goingUp=true;
    this.screenW=screenW;
    this.screenH=screenH;
  }

  draw(c){
    this.drawTail(c,3);
    c.fillStyle="#FFFFFF";
    c.fillRect(this.x,this.y,this.a,this.a);
  }

  drawTail(c,tail){
    c.fillStyle="#999999";
    c.beginPath();
    if(this.goingRight && this.goingUp){
      c.moveTo(this.x,this.y);
      c.lineTo(this.x-tail*this.speedX,this.y+this.a+tail*this.speedY);
      c.lineTo(this.x+this.a,this.y+this.a);
      c.fill();
    }else if (!this.goingRight && this.goingUp) {
      c.moveTo(this.x+this.a,this.y);
      c.lineTo(this.x+this.a+tail*this.speedX,this.y+this.a+tail*this.speedY);
      c.lineTo(this.x,this.y+this.a);
      c.fill();
    }else if (this.goingRight && !this.goingUp) {
      c.moveTo(this.x+this.a,this.y);
      c.lineTo(this.x-tail*this.speedX,this.y-tail*this.speedY);
      c.lineTo(this.x,this.y+this.a);
      c.fill();
    }else{
      c.moveTo(this.x,this.y);
      c.lineTo(this.x+this.a+tail*this.speedX,this.y-tail*this.speedY);
      c.lineTo(this.x+this.a,this.y+this.a);
      c.fill();
    }
  }

  move(p){
    if(this.y+this.a>=player.y && this.y<=player.y+player.height && this.x<=player.width){
      this.goingRight=true;
    }
    if(this.y<=0 || this.y+this.a>=this.screenH){
      this.goingUp=!this.goingUp;
    }
    if(this.goingRight){
      this.x+=this.speedX;
    }else{
      this.x-=this.speedX;
    }
    if(!this.goingUp){
      this.y+=this.speedY;
    }else{
      this.y-=this.speedY;
    }
  }
}
