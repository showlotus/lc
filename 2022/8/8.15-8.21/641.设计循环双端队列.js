/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.queue = new Array(k + 1).fill(0)
  this.size = k + 1
  this.front = 0
  this.last = 0
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false
  this.front = (this.front - 1 + this.size) % this.size
  this.queue[this.front] = value
  return true
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false
  this.queue[this.last] = value
  this.last = (this.last + 1) % this.size
  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false
  this.front = (this.front + 1) % this.size
  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false
  this.last = (this.last - 1 + this.size) % this.size
  return true
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1
  return this.queue[this.front]
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1
  return this.queue[(this.last - 1 + this.size) % this.size]
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.front === this.last
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return (this.last + 1) % this.size === this.front
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

var obj = new MyCircularDeque(3)
var param_1 = obj.insertFront(3)
var param_2 = obj.insertLast(1)
var param_3 = obj.deleteFront()
var param_4 = obj.deleteLast()
var param_5 = obj.getFront()
var param_6 = obj.getRear()
var param_7 = obj.isEmpty()
var param_8 = obj.isFull()

console.log(param_1)
console.log(param_2)
console.log(param_3)
console.log(param_4)
console.log(param_5)
console.log(param_6)
console.log(param_7)
console.log(param_8)
