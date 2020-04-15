let canvas
let birds
let clap
let firstBolt
let rain
// TODO: create a separate layer for the rain so it doesn't habe
// to fade the same as the ligntning (probably wan't no fade for rain)
function preload() {
    birds = loadSound('birds.mp3')
    clap = loadSound('clap.mp3')
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    background(0)
    firstBolt = true
    rain = []
    for (let i = 0; i < 500; i++) {
        rain.push(new Drop())
    }
}

function draw() {
    background(0, 50)
    rain.forEach(drop => drop.fall())
}

function mousePressed() {
    new Bolt(mouseX, mouseY, 2, 255, 1, clap, 50, .05, 2, true)
    if (firstBolt) {
        birds.play()
        firstBolt = false
    }
}

function windowResized() {
    canvas = createCanvas(windowWidth, windowHeight)
    background(0)
}