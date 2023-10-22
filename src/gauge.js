/**
 * Represents a spacecraft speed gauge.
 */
class Gauge {
  /**
   * Creates a gauge.
   * @param {number} x - Top left x coordinate
   * @param {number} y - Top left y coordinate
   * @param {number} speed - Initial speed
   */
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  /**
   * Returns gauge current speed.
   * @returns {number} - Current gauge speed
   */
  getSpeed() {
    return this.speed;
  }

  /**
   * Increases gauge speed by 1 up to limit of 10.
   */
  accelerate() {
    this.speed = this.speed + 1 <= 10 ? this.speed + 1 : this.speed;
  }

  /**
   * Decreases gauge speed by 1 down to limit of 1.
   */
  break() {
    this.speed = this.speed - 1 > 0 ? this.speed - 1 : this.speed;
  }

  /**
   * Draws gauge on canvas.
   */
  draw() {
    fill(0);
    rect(this.x, this.y, 50, 100);

    if (this.speed <= 3) fill(0, 255, 0);
    else if (this.speed > 3 && this.speed <= 8) fill(255, 255, 0);
    else fill(255, 0, 0);

    rect(this.x, this.y + 100, 50, -map(this.speed, 0, 10, 0, 100));
  }
}
