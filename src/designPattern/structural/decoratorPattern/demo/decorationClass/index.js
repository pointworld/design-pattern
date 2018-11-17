@testDeco
class Demo {
  // ...
}

function testDeco(target) {
  target.isDeco = true
}

// test --------------------------

alert(Demo.isDeco) // true
