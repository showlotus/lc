/*
 * @lc app=leetcode.cn id=901 lang=javascript
 *
 * [901] 股票价格跨度
 */

// @lc code=start

var StockSpanner = function () {
  this.max = 0
  this.last = 0
  this.stack = []
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let res
  if (this.last !== 0 && price >= this.last) {
    let i = this.stack.length - 1 - this.max
    while (i >= 0 && this.stack[i--] <= price) {
      this.max++
    }
    res = ++this.max
  } else {
    res = 1
    this.max = 1
  }
  this.stack.push(price)
  this.last = price
  return res
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end
const S = new StockSpanner()
const list = [100, 80, 60, 70, 60, 75, 85]
list.forEach(v => {
  console.log(S.next(v))
})
