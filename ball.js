class Ball{
  constructor(a,screenW,screenH){
    this.a=a;
    this.x=screenW/2-a/2;
    this.y=screenH/2-a/2;
    this.speedX=3;
    this.speedY=0;
    this.goingRight=false;
    this.goingUp=false;
    this.screenW=screenW;
    this.screenH=screenH;
  }

  draw(c){
    this.drawTail(c,5);
    c.fillStyle="#FFFFFF";
    c.fillRect(this.x,this.y,this.a,this.a);
  }

  drawTail(c,tail){
    c.fillStyle="#999999";
    c.beginPath();
    if(this.speedY==0 && this.goingRight){
      c.moveTo(this.x,this.y);
      c.lineTo(this.x-tail*this.speedX,this.y+this.a/2+tail*this.speedY);
      c.lineTo(this.x,this.y+this.a);
      c.fill();
    }else if(this.speedY==0 && !this.goingRight){
      c.moveTo(this.x+this.a,this.y);
      c.lineTo(this.x+this.a+tail*this.speedX,this.y+this.a/2+tail*this.speedY);
      c.lineTo(this.x+this.a,this.y+this.a);
      c.fill();
    }else if(this.goingRight && this.goingUp){
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

  reset(){
    this.x=this.screenW/2-this.a/2;
    this.y=this.screenH/2-this.a/2;
    this.spthis.eedX=3;
    this.speedY=0;
    this.goingRight=false;
    this.goingUp=false;
  }

  move(p,e){
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
    if(this.y+this.a>=p.y && this.y<=p.y+p.height && this.x<=p.width){
      this.x=p.width;
      this.goingRight=true;
    }else if(this.y+this.a>=e.y && this.y<=e.y+e.height && this.x>=this.screenW-e.width){
      this.x=this.screenW-this.a-e.width;
      this.goingRight=false;
    }
    if(this.x<0){
      this.reset();
      return -1;
    }else if(this.x>this.wscreenW){
      this.reset();
      return 1;
    }
    return 0;
  }
}
