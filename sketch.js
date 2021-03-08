var maxDrops = 100;

function preload(){
    iu1=loadImage("Walking Frame/walking_1.png");
    iu2=loadImage("Walking Frame/walking_2.png");
    iu3=loadImage("Walking Frame/walking_3.png");
    iu4=loadImage("Walking Frame/walking_4.png");
    iu5=loadImage("Walking Frame/walking_5.png");
    iu6=loadImage("Walking Frame/walking_6.png");
    iu7=loadImage("Walking Frame/walking_7.png");
    iu8=loadImage("Walking Frame/walking_8.png");

    it1=loadImage("thunderbolt/1.png")
    it2=loadImage("thunderbolt/2.png")
    it3=loadImage("thunderbolt/3.png")
    it4=loadImage("thunderbolt/4.png")
    
}

function setup(){
  createCanvas(400,800);
 for(var i=0;i<maxDrops;i++){
   Drops.push(new Drops(random(0,400),random(0,400)));
 }

  
}

function draw(){
  

}   

