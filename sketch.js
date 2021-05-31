const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,ground,gimg;
var ice = [];
var maxSnow = 50;
var runner,runnerImg;

function preload() {
  bg = loadImage("snow2.jpg");
  runnerImg=loadAnimation("a1.png","a2.png","a3.png","a4.png","a5.png");
}

function setup() {
  createCanvas(1300,600);
  
  engine = Engine.create();
  world = engine.world;

ground=createSprite(1500,600,1500,10);
ground.scale=3.2;
ground.velocityX=-10;

runner=createSprite(150,300);
runner.addAnimation("runner",runnerImg);
runner.scale=1.1;
runner.velocityX=2;
runner.setCollider("rectangle",15, -20,100,180);

if(frameCount % 275 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1350), random(0,50)));
  }
  }
}

function draw() {
  background(bg);  
  Engine.update(engine);

 runner.collide(ground);


  if(runner.x > 1200){
    runner.x=150;
  }

  if(keyWentDown("space")&& runner.y >= 100) {
    runner.velocityY = -12;
}

runner.velocityY = runner.velocityY + 0.8

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    
ground.display();

  
  drawSprites();

}