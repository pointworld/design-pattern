class Park {
  constructor(floors) {
    this.floors = floors || []
    this.camera = new Camera()
    this.screen = new Screen()
    this.carList = {}
  }

  in(car) {
    const info = this.camera.shot(car)

    const i = parseInt(Math.random() * 100)
    const place = this.floors[0].places[i]

    place.in()
    info.place = place

    this.carList[car.license] = info
  }

  out(car) {
    const info = this.carList[car.license]

    const place = info.place
    place.out()

    this.screen.show(car, info.inTime)

    delete this.carList[car.license]
  }

  emptyNum() {
    return this.floors.map(floor => {
      return `floor ${floor.index} has ${floor.emptyPlaceNum()} free places`
    })
      .join('\n')
  }
}

class Floor {
  constructor(index, places) {
    this.index = index
    this.places = places || []
  }

  emptyPlaceNum() {
    let num = 0

    this.places.forEach(p => {
      if (p.empty) {
        num++
      }
    })

    return num
  }
}

class Place {
  constructor() {
    this.empty = true
  }

  in() {
    this.empty = false
  }

  out() {
    this.empty = true
  }
}

class Camera {
  shot(car) {
    return {
      license: car.license,
      inTime: Date.now()
    }
  }
}

class Screen {
  show(car, inTime) {
    console.log('license: ', car.license)
    console.log('parking time: ', Date.now() - inTime)
  }
}

class Car {
  constructor(license) {
    this.license = license
  }
}

// test ----------------------------

const floors = []

for (let i = 0; i < 3; i++) {
  const places = []
  for (let j = 0; j < 100; j++) {
    // init place
    places[j] = new Place()
  }
  // init floor
  floors[i] = new Floor(i + 1, places)
}

// init park
const park = new Park(floors)

// init car
const car1 = new Car('point100')
const car2 = new Car('point200')
const car3 = new Car('point300')

console.log('car1 in')
console.log(park.emptyNum())
park.in(car1)

console.log('car2 in')
console.log(park.emptyNum())
park.in(car2)

console.log('car1 out')
park.out(car1)
console.log('car2 out')
park.out(car2)

console.log('car3 in')
console.log(park.emptyNum())
park.in(car3)
console.log('car3 out')
park.out(car3)
