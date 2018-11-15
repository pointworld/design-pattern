class Car {
  constructor(name, license) {
    this.name = name
    this.license = license
  }
}

class ExpressCar extends Car {
  constructor(name, license) {
    super(name, license)
    this.price = 1
  }
}

class SpecialCar extends Car {
  constructor(name, license) {
    super(name, license)
    this.price = 2
  }
}

class Trip {
  constructor(car) {
    this.car = car
  }

  start() {
    console.log(`journey begins, name: ${this.car.name}, license: ${this.car.license}`)
  }

  end() {
    console.log(`journey ends, price: ` + this.car.price * 5)
  }
}

const expressCar = new ExpressCar('POINT', 'point1000000')
const expressTrip = new Trip(expressCar)

expressTrip.start()
expressTrip.end()

const specialCar = new SpecialCar('WORLD', 'world0000001')
const specialTrip = new Trip(specialCar)

specialTrip.start()
specialTrip.end()
