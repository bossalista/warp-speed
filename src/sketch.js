/**
 * Constants.
 */
const BASE_SIZE = 600;
const SPEED = 4;

/**
 * Sketch variables initialization.
 */
let galaxy;

/**
 * Initializes sketch.
 */
function setup() {
  galaxy = new Galaxy(1000);

  var canvas = createCanvas(BASE_SIZE, BASE_SIZE);
  canvas.parent("sketch-holder");
}

/**
 * Sketch main loop.
 */
function draw() {
  background(0);
  translate(width / 2, height / 2);

  galaxy.update();
  galaxy.draw();
}
