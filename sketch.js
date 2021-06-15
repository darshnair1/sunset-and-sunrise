const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg, hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg) {
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
    textSize(30);
    text("Time: " + hour, 50, 50);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseType = await response.json();

    // write code slice the datetime
    var dt = responseType.datetime
    hour = dt.slice(11, 13);

    // add conditions to change the background images from sunrise to sunset
    if(hour >=01 && hour <= 02) {
        bg = "sunrise1.png";
    }
    else if(hour >= 03 && hour <= 04) {
        bg = "sunrise2.png";
    }
    else if(hour >= 05 && hour <= 06) {
        bg = "sunrise3.png";
    }
    else if(hour >= 07 && hour <= 08) {
        bg = "sunrise4.png";
    }
    else if(hour >= 09 && hour <= 10) {
        bg = "sunrise5.png";
    }
    else if(hour >= 11 && hour <= 12) {
        bg = "sunrise6.png";
    }
    else if(hour >= 13 && hour <= 14) {
        bg = "sunset7.png";
    }
    else if(hour >= 15 && hour <= 16) {
        bg = "sunset8.png";
    }
    else if(hour >= 17 && hour <= 18) {
        bg = "sunset9.png";
    }
    else if(hour >= 19 && hour <= 20) {
        bg = "sunset10.png";
    }
    else if(hour >= 21 && hour <= 22) {
        bg = "sunset11.png";
    }
    else {
        bg = "sunset12.png"
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
