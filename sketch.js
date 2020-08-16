var ball,img,paddle;

function preload() {
ball = loadImage("ball.png");
  paddle = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(50,200,20,20);
  ball.addImage(ball);
  ball.velocityX = +9;
  
  paddle = createSprite(50,225,10,50);
  paddle = addImage(paddle);
  
}

function draw() {
  background(205,153,0);
 
edges = createEdgeSprite();
ball.bounceOff(edges[0]);
ball.bounceOff(edges[1]);
ball.bounceOff(edges[2]);
  
  

  drawSprites();
  
}
