// Add your Circle class here
class Circle {
  constructor (radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }
  get area() {
    return Math.PI * this.radius ** 2;
  }
  set circumference(circum) {
    this.radius = circum / (2 * Math.PI);
    return this.radius;
  }
  set diameter(dia) {
    this.radius = dia / 2;
    return this.radius;
  }
  set area(area) {
    this.radius = Math.sqrt(area / Math.PI);
    return this.radius;
  }
}