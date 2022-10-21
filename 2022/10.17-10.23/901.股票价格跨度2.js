/*
 * @lc app=leetcode.cn id=901 lang=javascript
 *
 * [901] 股票价格跨度
 */

// @lc code=start

var StockSpanner = function () {
  this.idx = -1
  this.stack = [[-1, Number.MAX_VALUE]]
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.idx++
  while (price >= this.stack[this.stack.length - 1][1]) {
    this.stack.pop()
  }
  const res = this.idx - this.stack[this.stack.length - 1][0]
  this.stack.push([this.idx, price])
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
