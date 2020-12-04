const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var engine, world, box;



function setup() {
  createCanvas(400, 400);
  engine = Engine.create()
  world = engine.world


  var options = {
    isStatic: true
  }


  box = Bodies.rectangle(50, 50, 30, 30, options)
  World.add(world, box)

  console.log(box)



}

function draw() {
  background(0);

  Engine.update(engine)

  rectMode(CENTER)
  rect(box.position.x, box.position.y, 30, 30)



}