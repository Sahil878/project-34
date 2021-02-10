const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World

var engine, world

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create()
  world = engine.world

  ground = new Ground(600,50,3000,20)
  fly = new Fly(fly.body,{x:500, y:50});

}

function draw() {
  background(0);

  ground.display()
  fly.display()

}

