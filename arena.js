class Arena{
  constructor(c,w,h){
    this.c=c;
    this.width=w;
    this.height=h;
  }

  draw(pScore,eScore){
    this.c.fillStyle="#000000";
    this.c.fillRect(0,0,canvas.width,canvas.height);
    this.c.fillStyle="#FFFFFF";
    let lineThickness=4;
    let lineOffset=30;
    let lineLenght=40;
    for(let i=0; i*lineLenght+i*lineOffset< this.height ; i++){
      this.c.fillRect(this.width/2-lineThickness/2,i*lineLenght+i*lineOffset,lineThickness,lineLenght);
    }
    this.c.font = "40px 'Press Start 2P'";
    this.c.fillStyle = "white";
    this.c.textAlign = "center";
    this.c.fillText(pScore, this.width*0.25, 50);
    this.c.fillText(eScore, this.width*0.75, 50);
  }
}
