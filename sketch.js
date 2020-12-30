const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1; 
var bobObject2; 
var bobObject3;
var bobObject4; 
var bobObject5;

var rigidSupport; 

var rope1; 
var rope2;
var rope3; 
var rope4; 
var rope5;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(400,400);
	bobObject2 = new Bob(450,400);
	bobObject3 = new Bob(500,400);
	bobObject4 = new Bob(350,400);
	bobObject5 = new Bob(300,400);
	
	rigidSupport = new roofObject(400,200,550,30); 
	
	rope1 = new Rope(bobObject1.body, rigidSupport.body, 0, 0);``
	rope2 = new Rope(bobObject2.body, rigidSupport.body,50,0);
	rope3 = new Rope(bobObject3.body, rigidSupport.body,100, 0);
	rope4 = new Rope(bobObject4.body, rigidSupport.body, -50, 0);
	rope5 = new Rope(bobObject5.body, rigidSupport.body, -100, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rigidSupport.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 }

 function keyPressed() {
  if (keyCode === UP_ARROW) {
	
	Matter.Body.applyForce(bobObject3.body, bobObject5.body.position,{x:75,y:-75});
   
	}
 }