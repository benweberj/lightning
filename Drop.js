class Drop {
  constructor() {
    this.pos = createVector(random(width), random(-1000, 0))
    this.spawn()
  }

  draw() {
    stroke('#7ca4d0')
    strokeWeight(this.width)
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.len)
  }

  fall() {
    this.vel.add(this.g)
    this.pos.add(this.vel)
    if (this.pos.y > height) this.spawn()
    this.draw()
  }

  spawn() {
    this.pos = createVector(random(width), random(-1000, -500))
    this.vel = createVector()
    this.g = createVector(0, random(.03, .2))
    this.width = random(1, 5)
    this.len = random(5, 20)
  }
}