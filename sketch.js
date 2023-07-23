var lander, landerImg;
var ground, bgImg;
var vx = 0;
var vy = 0;
var g = 0.05;

function preload(){
  bgImg = loadImage("assets/bg_sur.png");
  landerImg = loadImage("assets/real ship.png");
  landerthrustImg = loadAnimation("assets/lander_thrust.png")
}

function setup(){
  createCanvas(1000, 700);
  lander  = createSprite(500, 600, 100, 100);
  lander.addImage(landerImg);
  lander.scale = 0.5;
  lander.addAnimation("thrusting", landerthrustImg);
  rectMode(CENTER);
  textSize(14);
}

function draw(){
  background("blue");
  image(bgImg, 0, 0);
  push();
  fill(255);
  text("Vertical Velocity: " +round(vy), 800, 75);
  pop();
  vy = vy + g;
  lander.position.y = lander.position.y + vy
  drawSprites();
}

function keyPressed(){
  if(keyCode ==  UP_ARROW){
    vy = -1;
    lander.changeAnimation('thrusting');
  }
}