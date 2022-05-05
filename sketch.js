//WIP - CLICK TARGET / CLICK TARGETS
//      MOVE BOX to random set location
//      GET TO OTHER SIDE
//      need more microgame ideas
//      Current # of microgames = 12
let internalTimeMilli = 1;
let internalTimeSeconds = 0;
let startingSceneFlag = false;
let rulesSceneFlag = false;
let gamesSceneFlag = false;
let intermissionSceneFlag = false;
let counterMil = 1;
let counterSec = 0;
let sceneNum = 0;
let score =  0;
let timeLimit = 10;

function preload(){
  img1 =loadImage("images/tv.jpg");
  img2 =loadImage("images/background.png");
  warioWare = loadFont('font/Wariowareinc-BWWdn.ttf');
}

function setup() {
  createCanvas(1404, 906);
}

function draw() {
  background('#FFFFFF');
  image(img1, 0, 0, 1404, 906);
  image(img2, 50, 50, 1030, 800);
  textFont(warioWare);
  //gameLoop();
  //Starting Screen
  switch (sceneNum) {
      //starting
    case 0:
      //background('#222222');
      //BUTTON
      strokeWeight(4);
      fill('#FFFFFF');
      rect(400,500,400,100);
      //TEXT
      textSize(80);
      //fill(255);
      fill('#222222');
      text("p5.js-ware",413,300);
      textSize(25);
      text("Click to Begin", 525,560);
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      //GO NEXT SCENE
      if(collidePointRect(mouseX,mouseY,400,500,400,100) == true && mouseIsPressed == true && counterSec > 2){
        console.log('Scene 0 Done');
        sceneNum = 1;
        counterMil = 1;
        counterSec = 0;
      }
      break;
    case 1:
      //Rules
      //background('#222222');
      //BUTTON
      strokeWeight(4);
      fill('#FFFFFF')
      rect(400,500,400,100);
      //TEXT
      textSize(40);
      //fill(255);
      fill('#222222');
      text("How to play",500,220);
      text("Do as the game tells you aslong as you can.",250,270);
      text("If you mess up you lose.", 400,320);
      textSize(25);
      text("Click to Begin", 525,560);
      //GO NEXT SCENE
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      if(collidePointRect(mouseX,mouseY,400,500,400,100) == true && mouseIsPressed == true && counterSec > 2){
        console.log('Scene 1 Done');
        sceneNum = 2;
        counterMil = 1;
        counterSec = 0;
      }
      break;
    case 2:
      //GET READY - Intermission Screen
      //background('#222222');
      //TEXT
      textSize(40);
      //fill(255);
      fill('#222222');
      text("GET READY!",500,400);
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      if( counterSec > 3){
        console.log('Scene 2 Done');
        counterMil = 1;
        counterSec = 0;
        let ran = random(3,15);
        console.log(ran);
        sceneNum = int(ran);
      }
      break;
    case 3:
      //Click mouse
      //background('#222222');
      //TEXT
      textSize(40);
      fill(255);
      fill('#222222');
      text("CLICK MOUSE",400,400);
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      textSize(25);
      text("Time Remaining: " + (timeLimit - counterSec),125,785);
      if( counterSec < timeLimit && mouseIsPressed == true){
        console.log('Scene 3 Done');
        counterMil = 1;
        counterSec = 0;
        score++;
        sceneNum = 2;
      } 
      if (counterSec > timeLimit) {
        sceneNum = 15;
        counterMil = 1;
        counterSec = 0;
      }
      break;
      case 4:
      //Hit spacebar
      //background('#222222');
      //TEXT
      textSize(40);
      fill(255);
      fill('#222222');
      text("HIT SPACEBAR",400,400);
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      textSize(25);
      text("Time Remaining: " + (timeLimit - counterSec),125,785);
      if( counterSec < timeLimit && keyIsDown(32) == true){
        console.log('Scene 4 Done');
        counterMil = 1;
        counterSec = 0;
        score++;
        sceneNum = 2;
      }
      if (counterSec > timeLimit) {
        sceneNum = 15;
        counterMil = 1;
        counterSec = 0;
      }
      break;
      case 5:
      //Hit Up Arrow
     // background('#222222');
      //TEXT
      textSize(40);
      fill(255);
      fill('#222222');
      text("HIT UP ARROW",400,400);
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      textSize(25);
      text("Time Remaining: " + (timeLimit - counterSec),125,785);
      if( counterSec < timeLimit && keyIsDown(38) == true){
        console.log('Scene 5 Done');
        counterMil = 1;
        counterSec = 0;
        score++;
        sceneNum = 2;
      }
      if (counterSec > timeLimit) {
        sceneNum = 15;
        counterMil = 1;
        counterSec = 0;
      }
      break;
      case 6:
      //Hit Left Arrow
      //background('#222222');
      //TEXT
      textSize(40);
      fill(255);
      fill('#222222');
      text("HIT LEFT ARROW",400,400);
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      textSize(25);
      text("Time Remaining: " + (timeLimit - counterSec),125,785);
      if( counterSec < timeLimit && keyIsDown(37) == true){
        console.log('Scene 6 Done');
        counterMil = 1;
        counterSec = 0;
        score++;
        sceneNum = 2;
      }
      if (counterSec > timeLimit) {
        sceneNum = 15;
        counterMil = 1;
        counterSec = 0;
      }
      break;
      case 7:
      //Hit Down Arrow
      //background('#222222');
      //TEXT
      textSize(40);
      fill(255);
      fill('#222222');
      text("HIT DOWN ARROW",400,400);
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      textSize(25);
      text("Time Remaining: " + (timeLimit - counterSec),125,785);
      if( counterSec < timeLimit && keyIsDown(40) == true){
        console.log('Scene 7 Done');
        counterMil = 1;
        counterSec = 0;
        score++;
        sceneNum = 2;
      }
      if (counterSec > timeLimit) {
        sceneNum = 15;
        counterMil = 1;
        counterSec = 0;
      }
      break;
      case 8:
      //Hit Right Arrow
      //background('#222222');
      //TEXT
      textSize(40);
      fill(255);
      fill('#222222');
      text("HIT RIGHT ARROW",400,400);
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      textSize(25);
      text("Time Remaining: " + (timeLimit - counterSec),125,785);
      if( counterSec < timeLimit && keyIsDown(39) == true){
        console.log('Scene 8 Done');
        counterMil = 1;
        counterSec = 0;
        score++;
        sceneNum = 2;
      }
      if (counterSec > timeLimit) {
        sceneNum = 15;
        counterMil = 1;
        counterSec = 0;
      }
      break;
      /*
      case 9:
      //Hit Target
      background('#222222');
      //TEXT
      textSize(40);
      fill(255);
      text("HIT TARGET",300,400);
      let targets = [];
      if (targets.length < 1) {
      append(targets, new Target(random(width),random(height), 100));
      targets[0].expand(0.5);
      targets[0].show();
      }
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      textSize(25);
      text("Time Remaining: " + (timeLimit - counterSec),5,785);
      if( counterSec < timeLimit && keyIsDown(39) == true){
        console.log('Scene 8 Done');
        counterMil = 1;
        counterSec = 0;
        score++;
        sceneNum = 2;
      }
      break;
      */
      case 9:
      //Hit Right Arrow
      //background('#222222');
      //TEXT
      textSize(40);
      fill(255);
      fill('#222222');
      text("2 + 2",400,400);
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      textSize(25);
      text("Time Remaining: " + (timeLimit - counterSec),125,785);
      if( counterSec < timeLimit && keyIsDown(52) == true){
        console.log('Scene 8 Done');
        counterMil = 1;
        counterSec = 0;
        score++;
        sceneNum = 2;
      }
      if (counterSec > timeLimit) {
        sceneNum = 15;
        counterMil = 1;
        counterSec = 0;
      }
      break;
      case 10:
      //Hit Right Arrow
      //background('#222222');
      //TEXT
      textSize(40);
      fill(255);
      fill('#222222');
      text("2 - 2",400,400);
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      textSize(25);
      text("Time Remaining: " + (timeLimit - counterSec),125,785);
      if( counterSec < timeLimit && keyIsDown(48) == true){
        console.log('Scene 8 Done');
        counterMil = 1;
        counterSec = 0;
        score++;
        sceneNum = 2;
      }
      if (counterSec > timeLimit) {
        sceneNum = 15;
        counterMil = 1;
        counterSec = 0;
      }
      break;
      case 11:
      //Hit Right Arrow
      //background('#222222');
      //TEXT
      textSize(40);
      fill(255);
      fill('#222222');
      text("5 - 4 + 2",400,400);
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      textSize(25);
      text("Time Remaining: " + (timeLimit - counterSec),125,785);
      if( counterSec < timeLimit && keyIsDown(51) == true){
        console.log('Scene 8 Done');
        counterMil = 1;
        counterSec = 0;
        score++;
        sceneNum = 2;
      }
      if (counterSec > timeLimit) {
        sceneNum = 15;
        counterMil = 1;
        counterSec = 0;
      }
      break;
      case 12:
      //Hit Right Arrow
      //background('#222222');
      //TEXT
      textSize(40);
      fill(255);
      fill('#222222');
      text("Third Letter of Alphabet",400,400);
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      textSize(25);
      text("Time Remaining: " + (timeLimit - counterSec),125,785);
      if( counterSec < timeLimit && keyIsDown(67) == true){
        console.log('Scene 8 Done');
        counterMil = 1;
        counterSec = 0;
        score++;
        sceneNum = 2;
      }
      if (counterSec > timeLimit) {
        sceneNum = 15;
        counterMil = 1;
        counterSec = 0;
      }
      break;
      case 13:
      //Hit Right Arrow
      //background('#222222');
      //TEXT
      textSize(40);
      fill(255);
      fill('#222222');
      text("Erase",400,400);
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      textSize(25);
      text("Time Remaining: " + (timeLimit - counterSec),125,785);
      if( counterSec < timeLimit && keyIsDown(8) == true){
        console.log('Scene 8 Done');
        counterMil = 1;
        counterSec = 0;
        score++;
        sceneNum = 2;
      }
      if (counterSec > timeLimit) {
        sceneNum = 15;
        counterMil = 1;
        counterSec = 0;
      }
      break;
      case 14:
      //Hit Right Arrow
      //background('#222222');
      //TEXT
      textSize(40);
      fill(255);
      fill('#222222');
      text("Enter",500,400);
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      textSize(25);
      text("Time Remaining: " + (timeLimit - counterSec),125,785);
      if( counterSec < timeLimit && keyIsDown(13) == true){
        console.log('Scene 8 Done');
        counterMil = 1;
        counterSec = 0;
        score++;
        sceneNum = 2;
      }
      if (counterSec > timeLimit) {
        sceneNum = 15;
        counterMil = 1;
        counterSec = 0;
      }
      break;
      //starting
    case 15:
      //background('#222222');
      //BUTTON
      strokeWeight(4);
      fill('#FFFFFF');
      rect(400,500,400,100);
      //TEXT
      textSize(80);
      fill(255);
      fill('#222222');
      text("You Lose",413,300);
      textSize(25);
      text("Click to Play Again", 505,560);
      if(counterMil % 100 == 0) {
        counterSec++;
      }
      counterMil++;
      //GO NEXT SCENE
      if(collidePointRect(mouseX,mouseY,400,500,400,100) == true && mouseIsPressed == true && counterSec > 2){
        console.log('End Scene Done');
        sceneNum = 0;
        counterMil = 1;
        counterSec = 0;
        score = 0;
        timeLimit = 10;
      }
      break;
      
      
      
  }
  
  //sceneNum = StartingScene();
  /*if (startingSceneFlag == false) {
   startingSceneFlag = StartingScene(); 
  }
  if (startingSceneFlag == true) {
    //Game Info Screen
    rulesScene();
  }
  */
  if(score == 5) {
    timeLimit=8;
  }
  
  if(score == 10) {
    timeLimit=6;
  }
  
  if(score == 15) {
    timeLimit=4;
  }
  
  if(score == 20){
    timeLimit=3;
  }
  
  
  //Internal Timer
  if(internalTimeMilli % 100 == 0) {
    internalTimeSeconds++;
  }
  internalTimeMilli++;
  //fill(255);
  fill('#222222');
  textSize(25);
  text("Time Spent: " + internalTimeSeconds,125,125);
  text("Score: " + score, 885, 125)
}

function StartingScene(){
  background('#222222');
  //BUTTON
  strokeWeight(4);
  fill('#222222');
  rect(200,500,400,100);
  //TEXT
  textSize(80);
  fill(255);
  text("p5.js-ware",213,300);
  textSize(25);
  text("Click to Begin", 325,560);
  //GO NEXT SCENE
  if(collidePointRect(mouseX,mouseY,200,500,400,100) == true){
    console.log('HERE');
    return true;
  }
}
  function rulesScene(){
  background('#222222');
  //BUTTON
  strokeWeight(4);
  fill('#222222')
  rect(200,500,400,100);
  //TEXT
  textSize(40);
  fill(255);
  text("How to play",213,300);
  text("Do as the game tells you aslong as you can.",220,300);
  text("If you mess up you lose.", 220,300);
  textSize(25);
  text("Click to Begin", 325,560);
  //GO NEXT SCENE
  if(collidePointRect(mouseX,mouseY,200,500,400,100) == true){
    return true;
  }
}
function gameLoop(){
  
  //sceneNum = StartingScene();
  if (startingSceneFlag == false) {
   startingSceneFlag = StartingScene(); 
  }
  if (startingSceneFlag == true) {
    //Game Info Screen
    rulesScene();
  }
  
}

