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
  this.currVisitIdx = 0
}

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  // 清空前进记录
  if (this.currVisitIdx !== this.history.length - 1) {
    this.history.splice(
      this.currVisitIdx + 1,
      this.history.length - 1 - this.currVisitIdx
    )
  }
  this.history.push(url)
  this.currVisitIdx = this.history.length - 1
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  this.currVisitIdx -= Math.min(this.currVisitIdx, steps)
  return this.history[this.currVisitIdx]
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  this.currVisitIdx = Math.min(
    this.history.length - 1,
    this.currVisitIdx + steps
  )
  return this.history[this.currVisitIdx]
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
