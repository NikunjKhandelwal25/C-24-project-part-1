
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	var option={
		isStatic:true
	}
	fill("yellow")
ground= Bodies.rectangle(800,650,1600,20,option)
World.add(world,ground)
	//Create the Bodies Here.
ball = new paper(300,300,20);

    drop3=new drop(1580,560,20,150)
    drop1=new drop(1400,560,20,150);
    drop2=new drop(1490,630,200,20)
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  rect(ground.position.x,ground.position.y,1600,20)
  drop3.display();
drop1.display();
drop2.display();
if(keyCode===UP_ARROW)
 Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-5})
}





