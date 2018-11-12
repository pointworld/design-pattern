class People {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eat() {
    alert(`${this.name} eat something`)
  }

  speak() {
    alert(`My name is ${this.name}, age ${this.age}`)
  }
}

class Student extends People {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }
  study() {
    alert(`${this.name} is Studying`)
  }
}

const point = new Student('point', 1, 'A1')
point.study()
point.speak()
alert(point.number)
point.eat()