/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const n = prices.length
  const discount = new Array(n).fill(0)
  const stack = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && prices[i] < stack[stack.length - 1]) {
      stack.pop()
    }
    discount[i] = !stack.length ? 0 : stack[stack.length - 1]
    stack.push(prices[i])
  }
  return prices.map((v, i) => v - discount[i])
}
// @lc code=end
var prices = [8, 4, 6, 2, 3]
prices = [1, 2, 3, 4, 5]
prices = [10, 1, 1, 6]
prices = [2]
var res = finalPrices(prices)
console.log(res)
