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
    this._events = new Map(); // 储存事件/回调键值对
  }
}
// 发布
_EventBus.prototype.myPub = function (type, ...args) {
  console.log("发布消息!" + args);
  //读取已发布的消息
  let subEvents = this._events.get(type);
  //如果有
  if (subEvents) {
    for (let i = 0; i < subEvents.length; i++) {
      if (args.length > 0) {
        subEvents[i].apply(this, args);
      } else {
        subEvents[i].call(this, ...args);
      }
    }
  } else {
    //如果没有, 添加一个, 处理为null
    this._events.set(type, null);
  }
  return true;
};
// 订阅type类型的事件
_EventBus.prototype.mySub = function (type, subEvent) {
  //获取type类型的处理, 如果没有, 则添加订阅
  const subEvents = this._events.get(type);
  if (!subEvents) {
    //如果type事件没有对应的发布方法, 那么就把订阅的方法传给发布者
    //这里采用数组的形式, 如果有多个订阅者
    this._events.set(type, [subEvent]);
  } else {
    subEvents.push(subEvent); // 如果已有订阅者则, 直接追加
  }
  //将传入的函数返回, 用作取消订阅
  return subEvent;
};
//移除订阅
_EventBus.prototype.removeSub = function (type, subEvent) {
  //获取对应消息的所有订阅内容
  const subEvents = this._events.get(type);
  if (subEvents) {
    //说实话这个判断, 只是为了稳一下, 如果没有订阅, 其实也没人去搞着这个
    // 遍历, 找出对应的subEvent 删除
    for (let i = 0, len = subEvents.length; i < len; i++) {
      if (subEvents[i] === subEvent) {
        subEvents.splice(i, 1);
        return;
      }
    }
  }
};

// 实例化并导出
export default new _EventBus();
