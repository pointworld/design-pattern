function testDeco(isDeco) {
  return function (target) {
    target.isDeco = isDeco
  }
}

@testDeco(true)
class Demo {
  // ...
}

// test -----------------------
alert(Demo.isDeco) // true