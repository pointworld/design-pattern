/**
 * 原型模式：基于一个对象（原型）创建另一个新的对象
 * Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__
 */

// 一个原型对象
const prototype = {
  getName() {
    return this.first + ' ' + this.last
  },

  say() {
    alert('hello')
  }
}

// 基于原型创建 x
const x = Object.create(prototype)
x.first = 'Point'
x.last = 'One'
alert(x.getName())
x.say()

// 基于原型创建 y
const y = Object.create(prototype)
y.first = 'A'
y.last = 'B'
alert(y.getName())
y.say()
