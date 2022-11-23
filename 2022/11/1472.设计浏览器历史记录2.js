/*
 * @lc app=leetcode.cn id=1472 lang=javascript
 *
 * [1472] 设计浏览器历史记录
 */

// @lc code=start
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.history = [homepage]
  this.forwardStack = []
}

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.history.push(url)
  this.forwardStack = []
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let canBackStep = Math.min(this.history.length - 1, steps)
  while (canBackStep-- > 0) {
    this.forwardStack.push(this.history.pop())
  }
  return this.history[this.history.length - 1]
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let canForwardStep = Math.min(this.forwardStack.length, steps)
  while (canForwardStep-- > 0) {
    this.history.push(this.forwardStack.pop())
  }
  return this.history[this.history.length - 1]
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// @lc code=end
const h = new BrowserHistory("a.com")
h.visit("b.com")
h.visit("c.com")
h.visit("d.com")
console.log(h.back(1))
console.log(h.back(1))
console.log(h.forward(1))
h.visit("e.com")
