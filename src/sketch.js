/**
 * Constants.
 */
const BASE_SIZE = 600;
const INITIAL_SPEED = 2;

/**
 * Sketch variables initialization.
 */
let galaxy;
let gauge;

/**
 * Initializes sketch.
 */
function setup() {
  gauge = new Gauge(BASE_SIZE - 50, BASE_SIZE - 100, INITIAL_SPEED);
  galaxy = new Galaxy(1000, gauge);

  var canvas = createCanvas(BASE_SIZE, BASE_SIZE);
  canvas.parent("sketch-holder");
}

/**
 * Sketch main loop.
 */
function draw() {
  background(0);

  push();
  translate(width / 2, height / 2);
  galaxy.update();
  galaxy.draw();
  pop();

  gauge.draw();
}

/**
 * Key pressed callback.
 */
function keyPressed() {
  // pressed key was 'w'
  if (keyCode === 87) {
    gauge.accelerate();
  }

  // pressed key was 's'
  else if (keyCode === 83) {
    gauge.break();
  }
}
