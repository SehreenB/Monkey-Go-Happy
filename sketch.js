
var monkey , monkey_running

var banana ,bananaImage, obstacle, obstacleImage

var FoodGroup, obstacleGroup

var score
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
createCanvas(400,400);

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;
  
  FoodGroup = createGroup();
  obstaclesGroup = createGroup();
  
}



function draw() {
  
    background("white");
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500, 50);
   
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100, 50);
  
  
  
    monkey.collide(ground);
  
  
  if (ground.x<0){
    ground.x=ground.width/2; 
  }
  
  
    if (keyDown("space") && monkey.y >=100){
      monkey.velocityY= -12;
    }

 monkey.velocityY = monkey.velocityY + 0.8
  

  if(obstaclesGroup.isTouching(monkey)){ 
    ground.velocityX = 0; 
    monkey.velocityY = 0; 
    obstaclesGroup.setVelocityXEach(0); 
    FoodGroup.setVelocityXEach(0); 
    obstaclesGroup.setLifetimeEach(-1); 
    FoodGroup.setLifetimeEach(-1); 
  }
  
  
    drawSprites();
    
  food();
  obstacles();
}


function food(){
  
  if (frameCount %80 === 0){
    
    var banana = createSprite(400,200,10,40);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 150; 
    monkey.depth = banana.depth + 1
    
    FoodGroup.add(banana);
    
  }
  
}


function obstacles(){
  
  if (frameCount % 300 === 0){
   var obstacle = createSprite(400,325,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4
    obstacle.lifetime = 100;
  
    obstaclesGroup.add(obstacle);
  
    }
  
}




