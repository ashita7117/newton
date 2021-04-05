
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);

	roof = new Ground(300,200,300,27)
	bob1 = new Box(400,300,40);
	bob2 = new Box(380,300,40);
  bob3 = new Box(360,300,40);
	bob4 = new Box(340,300,40);
	bob5 = new Box(320,300,40);
	bob6 = new Box(200,300,40);
  chain1 = new Chain(bob1.body,roof.body,+40,0);
  chain2 = new Chain(bob2.body,roof.body,+40,0)
  chain3 = new Chain(bob3.body,roof.body,+40,0)
  chain4 = new Chain(bob4.body,roof.body,+40,0)
  chain5 = new Chain(bob5.body,roof.body,+40,0)
  chain6 = new Chain(bob6.body,roof.body,+40,0)


}


function draw() {
  rectMode(CENTER);
  background(240);
  Engine.update(engine);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();
  drawSprites();
 
}



