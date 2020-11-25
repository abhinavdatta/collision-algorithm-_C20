function setup() {
  createCanvas(1200,800);
 a = createSprite(400, 200, 50, 50);
 b = createSprite(200,200,30,40);

 a.shapeColor="black";
 b.shapeColor="blue";

}


function draw() {
  background("brown");  
  
  b.y=World.mouseY;
  b.x=World.mouseX;
  
  if(b.x - a.x < a.width/2 + b.width/2 && a.x - b.x < b.width/2 + a.width/2 && b.y - a.y < a.height/2 + b.height/2 && a.y - b.y < b.height/2 + a.height/2){
    a.shapeColor="blue";
    b.shapeColor="black";
  }
  else{
    a.shapeColor="black";
    b.shapeColor="blue";
  }

  drawSprites();
}