/**
 * Constants.
 */
const BASE_SIZE = 600;

/**
 * Sketch variables initialization.
 */
let galaxy;

/**
 * Initializes sketch.
*/
function setup() {
    galaxy = new Galaxy(1000);

    createCanvas(BASE_SIZE, BASE_SIZE);
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
