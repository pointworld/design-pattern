/**
 * 策略模式：
 * 不同策略分开处理
 * 避免出现大量 if... else 或者 switch... case
 */

// class User {
//   constructor(type) {
//     this.type = type
//   }
//
//   buy() {
//     if (this.type === 'ordinary') {
//       console.log('普通用户购买')
//     } else if (this.type === 'member') {
//       console.log('会员用户购买')
//     } else if (this.type === 'vip') {
//       console.log('vip 用户购买')
//     }
//   }
// }

class OrdinaryUser {
  buy() {
    console.log('普通用户购买')
  }
}

class MemberUser {
  buy() {
    console.log('会员用户购买')
  }
}

class VipUser {
  buy() {
    console.log('vip 用户购买')
  }
}

// test ------------------------------

// const user1 = new User('ordinary')
// user1.buy()
//
// const user2 = new User('member')
// user2.buy()
//
// const user3 = new User('vip')
// user3.buy()

const u1 = new OrdinaryUser()
u1.buy()

const u2 = new MemberUser()
u2.buy()

const u3 = new VipUser()
u3.buy()
