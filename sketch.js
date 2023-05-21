var canvas;
var background_img, player_img, lion_img, lion_attack_img;
var bg;
var test;
var player;
var gem, gem_img, treasure, treasure_img, bat, bat_img, rock, rock_img, ghost, ghost_img, snake, snake_img, bat_fly, bat_fly_img;
var lion;
var lion_attack;

function preload() {
 background_img=loadImage("/assets/Cave bg.jpg")
 player_img = loadAnimation("/assets/Player 1.png", "/assets/Player 2.png", "/assets/Player 3.png", "/assets/Player 4.png")
 lion_img = loadAnimation("/assets/Lion 1.png", "/assets/Lion 2.png")
// lion_attack_img = loadAnimation("/assets/Lion 2.png, /assets/Lion Attacking.png")
 gem_img = loadImage("/assets/jem.png")
 treasure_img = loadImage("/assets/treasure.png")
 rock_img = loadImage("assets/Rock 1.png")
 ghost_img = loadImage("assets/Ghost.png")
 snake_img = loadImage("assets/Snake.png")
 bat_img = loadImage("assets/Bat 1.png")
 bat_fly_img = loadImage("assets/Bat 2.png")
}

function setup() {
createCanvas(windowWidth, windowHeight);


bg = createSprite(windowWidth/2,windowHeight/2);
bg.addImage(background_img);
bg.velocityX=-3

player = createSprite(130,height-170)
player.addAnimation("moving",player_img)
player.scale=0.6

lion = createSprite(width-170,height-170)
lion.addAnimation("walking",lion_img)
lion.scale=1
}

function draw() {
  background("black");

if(bg.x<=200){
  bg.x= windowWidth/2
}

  spawnrock()
drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function spawnrock(){
  rock = createSprite(500,height-70)
  rock.addImage(rock_img)
  rock.scale=0.5
}