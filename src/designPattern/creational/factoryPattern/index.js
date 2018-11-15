class Product {
  constructor(name) {
    this.name = name
  }

  init() {
    alert('init')
  }

  fn1() {
    alert('fn1')
  }

  fn2() {
    alert('fn2')
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

// test --------------------------

const creator = new Creator()

const p1 = creator.create('p1')
p1.init()
p1.fn1()
p1.fn2()
