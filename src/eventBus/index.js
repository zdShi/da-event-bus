/**
 * 自定义事件监听分发
 * 1. 需要存储的数据
 *  - 事件名, 事件回调
 *    事件名用来发布者和订阅者, 建立联系, 事件的回调用来处理获取发布的消息
 * 2. 需要定义的方法
 *  - 事件回调, 事件的绑定, 事件的订阅, 事件的分发
 */

class _EventBus {
  constructor() {
    this._events = new Map() // 储存事件/回调键值对
  }
}

// 发布
_EventBus.prototype.myPub = function (type, ...args) {
  console.log("发布消息!"+ args)
  //读取已发布的消息
  let pubEvents = this._events.get(type)
  //如果有
  if (pubEvents) {
    for (let i = 0; i < pubEvents.length; i++) {
      if (args.length > 0) {
        pubEvents[i].apply(this, args)
      } else {
        pubEvents[i].call(this)
      }
    }
  } else {
    //如果没有, 添加一个, 处理为null
    this._events.set(type, null)
  }
  return true
}
// 订阅type类型的事件
_EventBus.prototype.mySub = function (type, subEvent) {
  //获取type类型的处理, 如果没有, 则添加订阅
  const pubEvents = this._events.get(type)
  if (!pubEvents) {
    //如果type事件没有对应的发布方法, 那么就把订阅的方法传给发布者
    //这里采用数组的形式, 如果有多个订阅者
    this._events.set(type, [subEvent])
  } else {
    pubEvents.push(subEvent) // 如果已有订阅者则, 直接追加
  }
}

// 实例化
const _eb = new _EventBus()
export default _eb
// // 订阅
// _eb.mySub('getName', name => {
//   console.log(`接收到的名字是 ${name}`)
// })
// _eb.mySub('getAge', age => {
//   console.log(`接收到的年龄是 ${age}`)
// })
// _eb.mySub('getUserInfo', user => {
//   let userInfo = JSON.stringify(user)
//   console.log(`接收到的用户是: ` + userInfo)
// })
//
// //发布消息
// _eb.myPub('getName', 'Tom')
// _eb.myPub('getAge', 18)
// _eb.myPub('getUserInfo', { name: 'Tom', age: 18 })
