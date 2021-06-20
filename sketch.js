var iss,iss_img;
var spacebg,bgImg;

var spacecraft,spacecraft_moving;
var spacecraft_D;
var spacecraft_L;
var spacecraft_R;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hasDocked = false;

function preload(){
  bgImg = loadImage("Images/spacebg.jpg");

  iss_img = loadImage("Images/iss.png");

  spacecraft_moving = loadAnimation("Images/spacecraft1.png");
  spacecraft_D = loadAnimation("Images/spacecraft2.png");
  spacecraft_L = loadAnimation("Images/spacecraft3.png");
  spacecraft_R = loadAnimation("Images/spacecraft4.png");

}

function setup() {
  createCanvas(1200,600);

 spacecraft = createSprite(580,500,50,50);

 spacecraft.addAnimation("moving",spacecraft_moving);
 spacecraft.addAnimation("down",spacecraft_D);
 spacecraft.addAnimation("left",spacecraft_L);
 spacecraft.addAnimation("right",spacecraft_R);

 spacecraft.scale = 0.3;

 iss = createSprite(650,250,50,50);
 iss.addImage(iss_img);

 engine = Engine.create();
	world = engine.world;


}
function draw() {
  background(bgImg); 
  spacecraft.velocityX = 0;
  spacecraft.velocityY = 0;

  if(!hasDocked){
    spacecraft.x = Math.round(random(575,580));
    
    if(keyDown("RIGHT_ARROW")){
      spacecraft.changeAnimation("right",spacecraft_R);
       spacecraft.VelocityX = +4;
  }
  if (keyDown("LEFT_ARROW")) {
    spacecraft.changeAnimation("left",spacecraft_L);
    spacecraft.velocityX = -4;
    }
  
  if(keyDown("DOWN_ARROW")){
   spacecraft.changeAnimation("down",spacecraft_D);
     spacecraft.velocityY = 0;
  }  
  if (keyDown("UP_ARROW")) {
    spacecraft.changeAnimation("moving",spacecraft_moving);
    spacecraft.velocityY = -2;
    
    }
  }
  
  drawSprites();
}

