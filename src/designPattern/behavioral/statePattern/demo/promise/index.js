/** promise 就是一个有限状态机 */

import StateMachine from 'javascript-state-machine'

// 状态机模型
const fsm = new StateMachine({
  init: 'pending', // 初始化状态
  transitions: [
    {
      name: 'resolve', // 事件名称
      from: 'pending',
      to: 'fulfilled'
    },
    {
      name: 'reject', // 事件名称
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    /**
     * 监听 resolve
     * @param state - 当前状态机实例
     * @param data - fsm.resolve(xxx) 中传递的参数 xxx
     */
    onResolve(state, data) {
      console.log('state', state)
      console.log('data', data)
      data.successList.forEach(fn => fn())
    },

    /**
     * 监听 reject
     * @param state - 当前状态机实例
     * @param data - fsm.reject(xxx) 中传递的参数 xxx
     */
    onReject(state, data) {
      console.log('state', state)
      console.log('data', data)
      data.failureList.forEach(fn => fn())
    }
  }
})

// 定义 Promise
class MyPromise {
  constructor(fn) {
    this.successList = []
    this.failureList = []

    fn(
      () => {
        // resolve 函数
        fsm.resolve(this)
      },
      () => {
        // reject 函数
        fsm.reject(this)
      }
    )
  }

  then(successFn, failureFn) {
    this.successList.push(successFn)
    this.failureList.push(failureFn)
  }
}

// test --------------------------
function loadImg(src) {
  return new MyPromise(function (resolve, reject) {
    const img = document.createElement('img')

    img.onload = function () {
      console.log('success')
      resolve(img)
    }

    img.onerror = function () {
      console.log('error')
      reject()
    }

    img.src = src
  })
}

const src = 'https://img4.mukewang.com/5a9fc8070001a82402060220-140-140.jpg'

const result = loadImg(src)

result.then(
  function () {
    console.log('ok1')
  },
  function () {
    console.log('fail1')
  }
)

result.then(
  function () {
    console.log('ok2')
  },
  function () {
    console.log('fail2')
  }
)
