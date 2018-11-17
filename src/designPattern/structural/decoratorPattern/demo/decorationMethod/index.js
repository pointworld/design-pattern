function readonly(target, name, descriptor) {
  // descriptor 属性描述对象（Object.defineProperty 中会用到），原来的值如下：
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true,
  // }
  descriptor.writable = false
  return descriptor
}

class Person {
  constructor() {
    this.first = 'Point'
    this.last = 'One'
  }

  @readonly
  name() {
    return `${this.first} ${this.last}`
  }
}

// test -------------------------------
const p = new Person()
console.log(p.name())
// can't work
// p.name = function () {
//   alert(100)
// }
// console.log(p.name())
