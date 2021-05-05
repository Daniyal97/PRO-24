
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1 = new Hammer(100,100,150,40)
	ground1 = new Ground(600,height,1200,20)
	stone1 = new Stone(700,320,100,100)
	rubber1 = new Rubber(900,450,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  hammer1.display()
  ground1.display()
  stone1.display()
  rubber1.display()
  
  drawSprites();
 
}



