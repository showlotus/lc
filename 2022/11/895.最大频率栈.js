/*
 * @lc app=leetcode.cn id=895 lang=javascript
 *
 * [895] 最大频率栈
 */

// @lc code=start

var FreqStack = function () {
  this.count = new Map()
  this.stack = []
  this.maxCount = 0
}

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  this.count.set(val, (this.count.get(val) || 0) + 1)
  const newCount = this.count.get(val)
  this.stack[newCount] = this.stack[newCount] || []
  this.stack[newCount].push(val)
  this.maxCount = Math.max(this.maxCount, newCount)
}

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const val = this.stack[this.stack.length - 1].pop()
  if (!this.stack[this.stack.length - 1].length) {
    this.stack.length--
    this.maxCount--
  }
  this.count.set(val, this.count.get(val) - 1)
  if (this.count.get(val) === 0) {
    this.count.delete(val)
  }
  return val
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
// @lc code=end
const fs = new FreqStack()
fs.push(5)
fs.push(7)
fs.push(5)
fs.push(7)
fs.push(4)
fs.push(5)
console.log(fs.pop())
console.log(fs.pop())
console.log(fs.pop())
console.log(fs.pop())

console.log(fs)
