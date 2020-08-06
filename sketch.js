var database;
var canvas;
var gameState=0;
var playerCount=0;
var form, player, game;
var allPlayers;
var distance=0;
var cars=[];
var car1,car2,car3,car4;
var C1,C2,C3,C4,ground_image,track_image;

function preload(){
  C1=loadImage("images/car1.png");
  C2=loadImage("images/car2.png");
  C3=loadImage("images/car3.png");
  C4=loadImage("images/car4.png");
 // ground_image=loadImage("images/ground.png");
 track_image=loadImage("images/track.png");
 
}

function setup(){
  database = firebase.database();
  console.log(database);
  canvas=createCanvas(displayWidth-20,displayHeight-30);

  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
    if(playerCount === 4){
      game.update(1);
    }

    if(gameState === 1){
      clear();
      game.play();
    }
    if(gameState === 2){
      game.end();
    }
}

