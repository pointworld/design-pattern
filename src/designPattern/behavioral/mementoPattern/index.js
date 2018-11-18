/**
 * 备忘录模式：
 * 随时记录一个对象的状态变化
 * 随时可以恢复之前的某个状态（如撤销功能）
 */

// 备忘类
class Memento {
  constructor(content) {
    this.content = content
  }

  getContent() {
    return this.content
  }
}

// 备忘列表
class CareTaker {
  constructor() {
    this.list = []
  }

  add(memento) {
    this.list.push(memento)
  }

  get(index) {
    return this.list[index]
  }
}

// 编辑器
class Editor {
  constructor() {
    this.content = null
  }

  setContent(content) {
    this.content = content
  }

  getContent() {
    return this.content
  }

  saveContentToMemento() {
    return new Memento(this.content)
  }

  getContentFromMemento(memento) {
    this.content = memento.getContent()
  }
}

// test ----------------------------
const editor = new Editor()
const careTaker =new CareTaker()

editor.setContent('111')
editor.setContent('222')

// 存储备忘录
careTaker.add(editor.saveContentToMemento())
editor.setContent('333')
careTaker.add(editor.saveContentToMemento())
editor.setContent('444')

console.log(editor.getContent())

// 撤销
editor.getContentFromMemento(careTaker.get(1))
console.log(editor.getContent())
// 撤销
editor.getContentFromMemento(careTaker.get(0))
console.log(editor.getContent())
