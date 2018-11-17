import { readonly } from 'core-decorators'

class Person {
  @readonly
  name() {
    return 'Point'
  }
}

// test -------------------------------
const p = new Person()
alert(p.name())

// TypeError: Cannot assign to read only property 'name' of object '#<Person>'
// p.name = function () {
//   console.log(123)
// }
// p.name()