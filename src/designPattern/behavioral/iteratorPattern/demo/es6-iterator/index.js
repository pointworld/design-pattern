function each(data) {
  // const iterator = data[Symbol.iterator]()
  // let item = {done: false}
  //
  // while (!item.done) {
  //   item = iterator.next()
  //   if (!item.done) {
  //     console.log(item.value)
  //   }
  // }

  for (let item of data) {
    console.log(item)
  }
}

each([1,2,3])
each(new Set('abc'))
each(new Map([[1,2], [3,4]]))
