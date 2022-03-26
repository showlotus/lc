/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n
  let n1 = 1
  let n2 = 2
  let n3
  for (let i = 3; i <= n; i++) {
    n3 = n1 + n2
    n1 = n2
    n2 = n3
  }
  return n3
}
// @lc code=end

var n = 3
// n = 2
// n = 45

console.log(climbStairs(n))
