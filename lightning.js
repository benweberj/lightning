let canvas,
  clap,
  rain,
  rainSounds,
  font,
  started = false;

function preload() {
  clap = loadSound("clap.mp3");
  rainSounds = loadSound("rain.wav");
  font = loadFont('./FiraCode-Light.ttf')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
  textFont(font)
  rain = [];
  for (let i = 0; i < 500; i++) {
    rain.push(new Drop());
  }
}

function draw() {
  background(0, 10);
  if (started) {
    rain.forEach((drop) => drop.fall());
  } else {
    textSize(32)
    
    fill(255);
    let str = 'Click for thunder';
    text(str, window.innerWidth/2 - (str.length*8), window.innerHeight/2 - 16);
  }
}

function mousePressed() {
  if (!started) {
    started = true
    rainSounds.loop()
  }
  new Bolt(mouseX, mouseY, 2, 255, 1, clap, 50, 0.1, 2, true);
  //   if (first)
}

function windowResized() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
}
