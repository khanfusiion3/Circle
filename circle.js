class Circle extends Shape {
  constructor(r) {
    this.radius = r;
  }
  clone() {
    return new Circle(this.radius);
  }
  initialize() {
    this.computeMass(1);
  }
  computeMass(density) {
    this.body.mass = Math.PI * this.radius * this.radius * density;
    this.body.invMass = this.body.mass !== 0 ? 1 / this.body.mass : 0;
    this.body.inertia = this.body.mass * this.radius * this.radius;
    this.body.invInertia = this.body.inertia !== 0 ? 1 / this.body.inertia : 0;
    return this;
  }
  getType() {
    return Type.Circle;
  }
}
