
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);
monkey= createSprite(100,500,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.15;
  

  
  FoodGroup= new Group();
  
}


function draw() {
background("white");
 

ground= createSprite(100,552,1000,20);
ground.velocityX=-2;
monkey.collide(ground);
if(ground.x<0){
  ground.x= ground.width/2;
   
}  
  
if(keyDown("space")){
  monkey.velocityY=-12;
}  
  
monkey.velocityY=monkey.velocityY + 0.8;

  
  
  
  
  
  
  
  
  
  
  
  createBanana();
  drawSprites();
}

function createBanana(){
if(frameCount%80===0){
  banana=createSprite(600,200,10,10);
  banana.addImage(bananaImage);
  banana.velocityX=-4;
  banana.y= Math.round(random(100,200));
  banana.scale=0.1;
  banana.lifetime=-150;
  FoodGroup.add(banana);
  
  
  
   
   
   
   }


}


