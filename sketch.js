var ball,ball_img,paddle,paddle_img;

function preload() {
ball_img = loadImage("ball.png");
paddle_img = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(50,200,20,20);
  ball.addImage(ball_img);
  ball.velocityX = +9;
  
  paddle = createSprite(50,225,10,50);
  paddle.addImage(paddle_img);
  
}

function draw() {
  background(205,153,0);
 
edges = createEdgeSprites();
ball.bounceOff(edges[1]);
ball.bounceOff(edges[2]);
ball.bounceOff(edges[3]);
ball.bounceOff(paddle,paddleSprite)
  
  if (keyDown(UP_ARROW)){
    paddle.y = paddle.y - 20;
  }
  if (keyDown(DOWN_ARROW)){
   paddle.y = paddle.y +20; 
  }
  drawSprites();
  
}
function paddleSprite(){
ball.velocityY = Math.round(random(-5,5));  
}
