class LoginForm {
  constructor() {
    this.instance = null
    this.state = 'hide'
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new LoginForm()
    }
    return this.instance
  }

  show() {
    if (this.state === 'show') {
      alert('已经显示')
      return
    }
    this.state = 'show'
    console.log('登录框显示成功')
  }

  hide() {
    if (this.state === 'hide') {
      alert('已经隐藏')
      return
    }
    this.state = 'hide'
    console.log('登录框隐藏成功')
  }
}

// test ---------------------------

const login1 = LoginForm.getInstance()
login1.show()

const login2 = LoginForm.getInstance()
login2.hide()

console.log('login1 === login2', login1 === login2)
