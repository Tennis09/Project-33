var backgroundImg;
var child;
var snow;
var snowImg;
var snowImg1;
var snowImg2;
var snowImg3;
var snowImg4;
var snowImg5;
var snowImg6;
var snowImg7;
var snowImg8;
var snowImg9;

function preload(){
  backgroundImg = loadImage("snow3.jpg");
  snowImg = loadImage("snow4.webp");
  snowImg1 = loadImage("snow4.webp");
  snowImg2 = loadImage("snow4.webp");
  snowImg3 = loadImage("snow4.webp");
  snowImg4 = loadImage("snow4.webp");
  snowImg5 = loadImage("snow4.webp");
  snowImg6 = loadImage("snow4.webp");
  snowImg7 = loadImage("snow4.webp");
  snowImg8 = loadImage("snow4.webp");
  snowImg9 = loadImage("snow4.webp");

  }

function setup() {
  createCanvas(1375,500);
  //createSprite(400, 200, 50, 50);
  //child = createSprite(25,25,225,225);
  snow = createSprite(650,60,200,200);
  snow1 = createSprite(740,80,200,200);
  snow2 = createSprite(870,60,200,200);
  snow3 = createSprite(970,80,200,200);
  snow4 = createSprite(1050,100,200,200);
  snow5 = createSprite(550,60,200,200);
  snow6 = createSprite(440,100,200,200);
  snow7 = createSprite(330,60,200,200);
  snow8 = createSprite(220,80,200,200);
  snow9 = createSprite(110,60,200,200);
}


function draw() {
  background(backgroundImg);
  textSize(25);
  fill("Blue");
  text("Press Space bar to see the Snow",500,485);
  
  
  //adding friction to the snow
  //snow.friction = 5
  
  //scaling the snow
  snow.scale = 0.25;
  snow1.scale = 0.25;
  snow2.scale = 0.25;
  snow3.scale = 0.25;
  snow4.scale = 0.25;
  snow5.scale = 0.25;
  snow6.scale = 0.25;
  snow7.scale = 0.25;
  snow8.scale = 0.25;
  snow9.scale = 0.25;

  // adding the snow images to the sprites
  snow.addImage(snowImg);
  snow1.addImage(snowImg1);
  snow2.addImage(snowImg2);
  snow3.addImage(snowImg3);
  snow4.addImage(snowImg4);
  snow5.addImage(snowImg5);
  snow6.addImage(snowImg6);
  snow7.addImage(snowImg7);
  snow8.addImage(snowImg8);
  snow9.addImage(snowImg9);

  Snow();
  drawSprites();
  //playSound("https://www.youtube.com/watch?v=-7XpEW70wuM",true);

}

function Snow(){
  if(keyCode === 32){
snow.y  = snow.y  + 10;
snow1.y = snow1.y + 10;
snow2.y = snow2.y + 10; 
snow3.y = snow3.y + 10; 
snow4.y = snow4.y + 10; 
snow5.y = snow5.y + 10; 
snow6.y = snow6.y + 10; 
snow7.y = snow7.y + 10; 
snow8.y = snow8.y + 10; 
snow9.y = snow9.y + 10; 
}
if(snow.y > 450){
  snow.y = 60;
}

if(snow1.y > 450 ){
  snow1.y = 80;
}

if(snow2.y > 450){
  snow2.y = 60;
}

if(snow3.y > 450){
  snow3.y = 80;
}

if(snow4.y > 450){
  snow4.y = 100;
}
if(snow5.y > 450){
  snow5.y = 60;
}
if(snow6.y > 450){
  snow6.y = 100;
}
if(snow7.y > 450){
  snow7.y = 60;
}
if(snow8.y > 450){
  snow8.y = 80;
}
if(snow9.y > 450){
  snow9.y = 60;
}
}
