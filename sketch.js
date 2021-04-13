hr = hour();
mn = minute();
sc = second();

angleMode(DEGREES);

scAngle = map(sc,0,60,0,360);

transalte()

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  
  Push();
  rotate (scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  Line(0,0,100,0);
  Pop();
  
  
  

  drawSprites();
}