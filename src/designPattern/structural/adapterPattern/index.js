class Adaptee {
  specificRequest() {
    return '德国标准插头'
  }
}

class Adapter {
  constructor() {
    this.adaptee = new Adaptee()
  }

  request() {
    const info = this.adaptee.specificRequest()

    return `${info} - 转换器 - 中国标准插头`
  }
}

// test ---------------------------------
const adapter = new Adapter()
const result = adapter.request()

console.log(result)
