class Shape {
  constructor(name, color) {
    this.name = name
    this.color = color
  }

  draw() {
    console.log(`${this.color.name} ${this.name}`)
  }
}

class Color {
  constructor(name) {
    this.name = name
  }
}

// test ----------------------------
const red = new Color('red')
const yellow = new Color('yellow')

const circle = new Shape('circle', red)
circle.draw()

const triangle = new Shape('triangle', yellow)
triangle.draw()
