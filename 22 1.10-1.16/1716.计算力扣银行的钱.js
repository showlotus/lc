/*
 * @lc app=leetcode.cn id=1716 lang=javascript
 *
 * [1716] 计算力扣银行的钱
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let res = 0
  let s = Math.floor(n / 7)
  if (s >= 1) {
    res += 28 * s + (((s - 1) * s) / 2) * 7
  }
  let p = Math.ceil(n / 7)
  let m = n % 7
  res += ((p * 2 + m - 1) * m) / 2
  return res
}
// @lc code=end

var n = 4
n = 10
n = 30
n = 100

console.log(totalMoney(n))
