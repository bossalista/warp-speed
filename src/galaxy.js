/**
 * Represents a galaxy and its contained particles.
 */
class Galaxy {
    /**
     * Creates a galaxy.
     * @param {number} size - Number of particles to be created in galaxy
     */
    constructor(size) {
        this.size = size;
        this.particles = [];

        for (let i = 0; i < this.size; i++) {
            const particle = new Particle();
            this.particles.push(particle);
        }
    }

    /**
     * Updates galaxy and its contained particles' state.
     */
    update() {
        for (const particle of this.particles) {
            particle.update();
        }
    }

    /**
     * Draws galaxy state on canvas.
     */
    draw() {
        noStroke();

        for (const particle of this.particles) {
            particle.draw();
        }
    }
}
