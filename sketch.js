var snow_man;
var snow_manImg;
var backgroundImg;
var boy;
var boyImg;

function preload(){
  backgroundImg = loadImage("snow1.jpg");
  snow_manImg = loadImage("snowman2.png");
  boyImg = loadImage("jumping.gif");
}

function setup() {

  createCanvas(1200,700);

  snow_man = createSprite(180,500,50,50);
  snow_man.addImage("snowman2",snow_manImg);
  snow_man.scale= 1.2;

  boy = createSprite(500,500);
  //boy.addAnimation("jump",boyImg); 

}

function draw() {
  background(backgroundImg);  
  drawSprites();

  //boy.debug = true;

  image(boyImg, boy.x, boy.y, 100,50);

}