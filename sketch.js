const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var divisions;
var particles;
var plinkos;
var particleRadius = 8;
var plinkoRadius = 10;
var divisionHeight = 300;
var width, height;


function setup() {
  createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height - 20);
  divisions = [];
  plinkos = [];
  particles = [];



  for(var i = 0; i <= width; i += 80){
    divisions.push(new Division(i, height - divisionHeight/2 - 28,5,divisionHeight))
  }

    for (var i = 25; i <=width; i += 50) {
    
    plinkos.push(new Plinko(i,175, plinkoRadius));
    plinkos.push(new Plinko (i, 375, plinkoRadius));
  }

  for (var i = 50; i <=width-50; i += 50) {
    
    plinkos.push(new Plinko(i,75,plinkoRadius));
    plinkos.push(new Plinko (i, 275,plinkoRadius));
  }

  

  var render = Matter.Render.create({element: document.body, engine:engine, options: { width:400, height:800}})
Matter.Render.run(render);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  
  background(0);  
  Engine.update(engine);
  ground.display();

  for(var i = 0; i < divisions.length; i += 1){
    divisions[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  if(frameCount%30 === 0){
    var rand = random(width/8, width-20);
    particles.push(new Particle(rand, 10,particleRadius));
  }

  for(var i = 0; i < particles.length; i ++){
    particles[i].display();
  }
  //drawSprites();
}