var mic;
var myImage;

var cnv;

var wc = 720;
var hc = 540;

var meme;
var meme1;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function preload() {
  meme = loadImage('Sources/meme3.png');
  meme1 = loadImage('Sources/meme2.png');
}

function setup() {

  background(0, 255, 0);
  cnv = createCanvas(720, 540);
  centerCanvas();
  capture = createCapture(VIDEO);
  capture.size(wc, hc);
  capture.hide();

  //Audio
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var myImage = capture.loadPixels();
  image(myImage, 0, 0, wc, hc);
  push();
  imageMode(CENTER);
  image(meme, mouseX, mouseY, 350, 350);
  if (mouseIsPressed == true) {
    image(meme1, mouseX + 10, mouseY - 10, 380, 380);
  }
  pop();

  //audio
  var vol = mic.getLevel();
  console.log(vol);
  if (vol > 0.003) {
    background('black')
  }

  push();
  textAlign(CENTER);
  textFont('Impact');
  textStyle(BOLD);
  textSize(50);
  fill(255);
  strokeWeight(2);
  text('CREATE YOUR MEME', width / 2, height / 10);
  pop();
  push();
  textFont('Poor Story');
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text('Creating this meme requires silence', width / 2, height / 20 * 18);
  pop();
}

function windowResized() {
  centerCanvas();
}
