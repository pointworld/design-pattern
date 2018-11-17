class RealImg {
  constructor(fileName) {
    this.fileName = fileName
    // 初始化，即从硬盘中加载，模拟
    this.loadFromDisk()
  }

  display() {
    console.log('display... ', this.fileName)
  }

  loadFromDisk() {
    console.log('loading... ', this.fileName)
  }
}

class ProxyImg {
  constructor(fileName) {
    this.realImg = new RealImg(fileName)
  }

  display() {
    this.realImg.display()
  }
}

// test ---------------------
const proxyImg = new ProxyImg('1.png')
proxyImg.display()
