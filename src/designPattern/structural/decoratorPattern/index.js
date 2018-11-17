class Circle {
  draw() {
    console.log('draw a circle')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }

  draw() {
    this.circle.draw()
    this.setRedBorder(circle)
  }

  setRedBorder(circle) {
    console.log('draw red border')
  }
}

// test -------------------------
const circle = new Circle()
circle.draw()

console.log('-------- separator line --------')

const deco = new Decorator(circle)
deco.draw()
