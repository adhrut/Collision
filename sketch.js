var fr,mr







function setup() {
  createCanvas(1200,800);
  fr = createSprite(200, 200, 50, 80);
  mr = createSprite(400, 200, 80, 30);
  fr.shapeColor = "green"
  mr.shapeColor = "green"
}

function draw() {
  background(0);  
  console.log("mr" + mr.x)
  console.log("fr" + fr.x)
  console.log("mrw" + mr.width/2)
  console.log("frw" + fr.width/2)
  mr.x = World.mouseX
  mr.y = World.mouseY
  if(mr.x - fr.x < mr.width/2 + fr.width/2 && fr.x - mr.x < mr.width/2 + fr.width/2  && mr.y - fr.y < mr.height/2 + fr.height/2 && fr.y - mr.y < mr.height/2 + fr.height/2 )  {

    fr.shapeColor = "red"
    mr.shapeColor = "red"
  
    
  }

  else {
    fr.shapeColor = "green"
  mr.shapeColor = "green"

  }
  drawSprites();
}