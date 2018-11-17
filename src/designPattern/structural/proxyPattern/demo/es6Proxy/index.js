const star = {
  name: 'Point',
  age: '1',
  phone: '110'
}

const agent = new Proxy(star, {
  get: function (target, key) {
    if (key === 'phone') {
      // return agent phone number
      return 'agent phone number: 10086'
    }
    if (key === 'price') {
      // agent gives the price
      return 1008611
    }
    return target[key]
  },
  set: function (target, key, val) {
    if (key === 'customPrice') {
      if (val < 1000000) {
        throw new Error('The price is too low. Get out!')
      } else {
        target[key] = val
        return true
      }
    }
  }
})

// test --------------------------
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

agent.customPrice = 100000
console.log('agent.customPrice', agent.customPrice)
