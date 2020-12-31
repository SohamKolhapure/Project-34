
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var roof, bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(400,150,60,12);

	bob1 = new Bob(300,100,35);
	bob2 = new Bob(400,100,35);
	

}


function draw() {
  background('pink');
  Engine.update(engine);
  roof.display();
  bob1.display();
  bob2.display();
  
	
 
}



