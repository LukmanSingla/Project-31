const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,plinkos,test,arr=[],arr2=[],arr3=[],wall1,wall2;
function setup() {
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  test=new Ground(250,height-10,500,20);
  wall1=new Division(0,350,10,700);
  wall2=new Division(500,350,10,700);
for(var i=0;i<9;i++){
  arr.push(new Plinko((i+1)*50,50,10,10));
}
for(var i=0;i<11;i++){
  arr.push(new Plinko(i*50+15,150,10,10));
}
for(var i=0;i<9;i++){
  arr.push(new Plinko((i+1)*50,250,10,10));
}
for(var i=0;i<11;i++){
  arr.push(new Plinko(i*50+15,350,10,10));
}

for(i=0;i<width;i+=70){
  arr3.push(new Division(i+5,height-130,10,260));2
}
}

function draw() {
  background(0);
  test.display();
  Engine.update(engine);
  if(frameCount%30==0){
    arr2.push(new Partical(200,40,10,10));
  }
  for(var i=0;i<arr.length;i++){
    arr[i].display();
  }
  for(var i=0;i<arr2.length;i++){
    arr2[i].display();
  }
  for(var i=0;i<arr3.length;i++){
    arr3[i].display();
  }
  drawSprites();
}