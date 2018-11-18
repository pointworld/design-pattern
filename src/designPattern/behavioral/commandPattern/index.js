/**
 * 命令模式：
 * 执行命令时，发布者和执行者分开
 * 中间加入命令对象，作为中转站
 */

class Receiver {
  exec() {
    console.log('执行')
  }
}

class Command {
  constructor(receiver) {
    this.receiver = receiver
  }

  cmd() {
    console.log('触发命令')
    this.receiver.exec()
  }
}

class Invoker {
  constructor(command) {
    this.command = command
  }

  invoke() {
    console.log('开始')
    this.command.cmd()
  }
}

// test -------------------

// 士兵
const soldier = new Receiver()
// 小号手
const trumpeter = new Command(soldier)
// 将军
const general = new Invoker(trumpeter)

general.invoke()
