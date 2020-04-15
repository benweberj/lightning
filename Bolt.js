class Bolt {
  constructor(x, y, stroke, opacity, interval, clap, reach, splitChance, splitCount, first) {
    this.x = x
    this.y = y
    this.stroke = stroke
    this.opacity = opacity
    this.interval = interval
    this.clap = clap
    this.reach = reach
    this.splitChance = splitChance
    this.splitCount = splitCount
    this.first = first
    this.path

    if (this.first) this.path = []

    this.lightning()
  }

  lightning() {
    let timer = setInterval(() => {
      let dx = int(random(-this.reach, this.reach))
      let dy = int(random(this.reach))
      stroke(this.opacity)
      strokeWeight(this.stroke)
      line(this.x, this.y, this.x + dx, this.y + dy)

      if (this.path !== undefined) {
        this.path.push(createVector(this.x, this.y))
      }

      this.x += dx
      this.y += dy

      if (random() < this.splitChance) {
        for (let i = 0; i < this.splitCount; i++) {
          let split = new Bolt(this.x, this.y, this.stroke / 5, this.opacity, this.interval / 2,
            this.clap, this.reach, this.splitChance * this.splitChance, this.splitCount, false)
        }
      }
      if (this.y >= height + this.reach) {
        clearInterval(timer)

        if (this.first) this.retrace()
      }
    }, this.interval)
  }

  retrace() {
    background(255, 100)
    setTimeout(() => clap.play(), random(600))
    let i = this.path.length - 1
    let followPath = setInterval(() => {
      stroke(255)
      strokeWeight(this.stroke * 2)
      line(this.path[i].x, this.path[i].y, this.path[i - 1].x, this.path[i - 1].y)
      i--
      if (i === 0) {
        clearInterval(followPath)
      }
    }, 0)
  }
}