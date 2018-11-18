/** 将主体与状态单独抽象出来 */

// 状态（红灯、黄灯、绿灯）
class State {
  constructor(color) {
    this.color = color
  }

  handle(context) {
    console.log(`turn to ${this.color} light`)
    context.setState(this)
  }
}

// 主体
class Context {
  constructor() {
    this.state = null
  }

  getState() {
    return this.state
  }

  setState(state) {
    this.state = state
  }
}

// test ----------------------------------
const context = new Context()

const green = new State('green')
const yellow = new State('yellow')
const red = new State('red')

// 绿灯亮了
green.handle(context)
console.log(context.getState())

// 黄灯亮了
yellow.handle(context)
console.log(context.getState())

// 红灯亮了
red.handle(context)
console.log(context.getState())
