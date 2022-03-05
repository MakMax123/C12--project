var runner, runner_running , ground, groundImage, block1, block2


function preload(){
  //pre-load images
 runner_running = loadAnimation("Runner-1.png","Runner-2.png");
 groundImage = loadImage("path.png");
}

function setup(){
  createCanvas(410,600);
  //create sprites here
  ground = createSprite(200,200);
  ground.addImage("ground",groundImage);
  ground.scale = 1.2;
  ground.velocityY = 4;

  block1 = createSprite(20,300,60,600);
  block1.visible=false;
  block2 = createSprite(350,300,100,600)
  block2.visible=false;
  runner = createSprite(200,500,10,50);
  runner.addAnimation("running",runner_running);
  runner.scale = 0.05;
}

function draw() {
  background("red");
runner.x = mouseX;
  if (ground.y>400){
    ground.y = height/2
  }
  
  runner.collide(block1);
  runner.collide(block2);
  drawSprites();
}
