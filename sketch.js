
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

var ball;
var ground;
var red1;
var red2;
var red3;

function setup() {

createCanvas(1000, 690);

engine = Engine.create();
world = engine.world;

red1 = new Bin(880,height-140,150,20);


red2 = new Boxred(940,height-120,20,100);


red3 = new Boxred(820,height-120,20,100);
   

ground1 = createSprite(100,height-55,3000,10);
ground1.shapeColor = "yellow";

ground = Bodies.rectangle(width/2, 610, 3000, 10 , {isStatic:true} );
World.add(world, ground);

ball = new Box(56,320,35,35,options,{isStatic:true});


console.log(ground);

var options={
 isStatic:true,
 restitution:0.3,
 friction:0.5,
 density:1.2
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

ball.display();
red2.display();
red3.display();
red1.display();


drawSprites();
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:320,y:-300});
}
}

