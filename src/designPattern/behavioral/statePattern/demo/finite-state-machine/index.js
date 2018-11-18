// 有限状态机：收藏和取消

import StateMachine from 'javascript-state-machine'

// 初始化状态机模型
const fsm = new StateMachine({
  init: '收藏',
  transitions: [
    {
      name: 'doStore',
      from: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    // 监听执行收藏
    onDoStore: function () {
      alert('收藏成功') // 可以 post 请求
      updateText()
    },

    // 监听取消收藏
    onDeleteStore: function () {
      alert('已经取消收藏') // 可以 post 请求
      updateText()
    }
  }
})


const btn = document.getElementById('btn')

// 按钮点击事件
btn.onclick = function () {
  if (fsm.is('收藏')) {
    fsm.doStore()
  } else {
    fsm.deleteStore()
  }
}

// 更新按钮的文案
function updateText() {
  btn.innerText = fsm.state
}

updateText()