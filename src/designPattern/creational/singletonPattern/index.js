class SingleObject {
  constructor() {
    this.instance = null
  }

  login() {
    console.log('login ...')
  }

  static getInstance () {
    if (!this.instance) {
      this.instance = new SingleObject()
    }
    return this.instance
  }
}

const obj1 = SingleObject.getInstance()
obj1.login()

const obj2 = SingleObject.getInstance()
obj2.login()

console.log('obj1 === obj2', obj1 === obj2)

console.log('----------------------------')

const obj3 = new SingleObject()
obj3.login()
console.log('obj1 === obj3', obj1 === obj3)
