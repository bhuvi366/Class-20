var fObject,mObject;
function setup() {
  createCanvas(800,400);
  fObject=createSprite(400, 200, 50, 80);
  mObject=createSprite(400, 200, 80, 50);
  fObject.shapeColor="red";
  mObject.shapeColor="red";

  
}

function draw() {
  background(255,255,255);
  mObject.x=mouseX  
  mObject.y=mouseY 
  console.log("distance betweenCentre "+(fObject.width/2+mObject.width/2));
  console.log("distance betweenObject "+(fObject.x-mObject.x));
  if(fObject.width/2+mObject.width/2>fObject.x-mObject.x
    && fObject.width/2+mObject.width/2>mObject.x-fObject.x
    && fObject.width/2+mObject.width/2>fObject.y-mObject.y
    && fObject.width/2+mObject.width/2>mObject.y-fObject.y
    )
{
    fObject.shapeColor="blue";
  mObject.shapeColor="blue";
  }
  else{
    fObject.shapeColor="red";
  mObject.shapeColor="red";
  }
  drawSprites();
}