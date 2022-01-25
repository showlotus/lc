/*
 * @lc app=leetcode.cn id=1688 lang=javascript
 *
 * [1688] 比赛中的配对次数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let res = 0
  while (n !== 1) {
    let half = n / 2
    res += Math.floor(half)
    n = Math.ceil(half)
  }
  return res
}
// @lc code=end
var n = 7
n = 14
n = 200
n = 1

console.log(numberOfMatches(n))
