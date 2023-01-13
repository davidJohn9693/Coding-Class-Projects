
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(51);
  box = createSprite(width/2,height/2,70,70);
  box.shapeColor = "black"
  changed = 0
}

function draw() 
{
  fill("white")
  text("Welcome", (width /2) - 30, (height/2) - 90)
  text("Press the arrow keys to change color of the background", (width /2) - 140, (height/2) - 70)
  text("Press the box to reset the background color", (width /2) - 115, (height/2) - 50)


  if (mousePressedOver(box)){
    background(51);

  }
  
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");

  }
  
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");

  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");

  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");

  }

  drawSprites();

  
  }


  

  


