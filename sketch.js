var fR,mR;
function setup() {
  createCanvas(800,400);
  fR=createSprite(400, 200, 50, 50);
  mR=createSprite(200,200,60,40);
}

function draw() {
  background("black");  
  mR.x=World.mouseX;
  mR.y=World.mouseY;

  if((mR.x-fR.x)<=(fR.width+mR.width)/2 && (fR.x-mR.x)<=(fR.width+mR.width)/2 && fR.y-mR.y<=(fR.height+mR.height)/2 && mR.y-fR.y<=(mR.height+fR.height)/2) {
    mR.shapeColor="red";
    fR.shapeColor="red";
  }
  else {
    mR.shapeColor="green";
    fR.shapeColor="green";
  }
  
  console.log("Distance between centers :"+(mR.x-fR.x));
  console.log(" average of widths "+(fR.width+mR.width)/2);
  drawSprites();
}