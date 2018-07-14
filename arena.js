class Arena{
  constructor(c,w,h){
    this.c=c;
    this.width=w;
    this.height=h;
  }

  draw(){
    context.fillStyle="#000000";
    context.fillRect(0,0,canvas.width,canvas.height);
    context.fillStyle="#FFFFFF";
    let lineThickness=4;
    let lineOffset=10;
    let lineLenght=12;
    for(let i=0; i*lineLenght+i*lineOffset< this.height ; i++){
      context.fillRect(this.width/2-lineThickness/2,i*lineLenght+i*lineOffset,lineThickness,lineLenght);
    }
  }
}
