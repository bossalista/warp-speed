/**
 * Represents a galaxy particle.
 */
class Particle {
    /**
     * Creates a particle.
     */
    constructor() {
        this.init();
    }

    /**
     * Initializes particle state.
     */
    init() {
        this.x = random(-BASE_SIZE / 2, BASE_SIZE / 2);
        this.y = random(-BASE_SIZE / 2, BASE_SIZE / 2);

        this.color = this.randomizeColor();

        this.offset = random(BASE_SIZE);
        this.previousOffset = this.offset;
    }

    /**
     * Randomizes particle color.
     * @returns {p5.Color} - Randomized color
     */
    randomizeColor() {
        const r = random(0, 1);

        if (r < 0.1)
            return lerpColor(color(255, 255, 255), color(0, 0, 255), random(0.1, 0.25));
        else if (r >= 0.1 && r < 0.2)
            return lerpColor(color(255, 255, 255), color(255, 255, 0), random(0.1, 0.25));
        else if (r >= 0.3 && r < 0.4)
            return lerpColor(color(255, 255, 255), color(255, 0, 0), random(0.1, 0.25));
        return color(255, 255, 255);
    }

    /**
     * Updates particle state.
     */
    update() {
        this.previousOffset = this.offset;
        this.offset -= SPEED;

        if (this.offset <= 0) {
            this.init();
        }
    }

    /**
     * Draws particle on sketch canvas.
     */
    draw() {
        strokeWeight(map(this.offset, 0, BASE_SIZE, 2, 1));
        stroke(this.color);

        const x = map(this.x / this.offset, 0, 1, 0, width);
        const y = map(this.y / this.offset, 0, 1, 0, height);

        const previousX = map(this.x / this.previousOffset, 0, 1, 0, width);
        const previousY = map(this.y / this.previousOffset, 0, 1, 0, height);

        line(x, y, previousX, previousY);
    }
}
