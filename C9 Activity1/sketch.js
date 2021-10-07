var ball;

function setup() {
  createCanvas(400,400);
 ball = createSprite(200,200,40,40);
ball.shapeColor ='red';
}

function draw() 
{
  background('grey');
 
 if(keyIsDown(UP_ARROW)){
   ball.y -=4;
 }

 if(keyIsDown(DOWN_ARROW)){
  ball.y +=4;
}

if(keyIsDown(LEFT_ARROW)){
  ball.x -=4;
}

if(keyIsDown(RIGHT_ARROW)){
  ball.x +=4;
}
 
drawSprites();

}




