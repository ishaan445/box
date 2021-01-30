var canvas;
var music;
var ground1;
var ground2;
var ground3;
var ground4;
var box;

function preload(){
    music = loadSound("music.mp3");
}
     

function setup(){
     createCanvas(800,600);
ground1 = createSprite(100,590,200,20);
ground2 = createSprite(300,590,200,20);
ground3 = createSprite(500,590,200,20);
ground4 = createSprite(700,590,200,20);
box = createSprite(40,40,20,20);
    //create 4 different surfaces
ground1.shapeColor = "red";
ground2.shapeColor = "blue";
ground3.shapeColor = "yellow";
ground4.shapeColor = "purple";
box.shapecolor = "white";

    //create box sprite and give velocity
box = createSprite(200,200,50,50);
if(keyDown("space")){
    box.velocityY=-4;
}
box.velocityY = box.velocityY + 0.8
}

function draw() {
    background(("black"));
    //create edgeSprite



    
    //add condition to check if box touching surface and make it box


    drawSprites();
}
