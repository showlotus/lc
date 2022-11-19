/*
 * @lc app=leetcode.cn id=1732 lang=javascript
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let curr = 0
  let max = 0
  gain.forEach(v => {
    curr += v
    max = Math.max(max, curr)
  })
  return max
}
// @lc code=end
let gain = [-5, 1, 5, 0, -7]
gain = [-4, -3, -2, -1, 4, 3, 2]
let res = largestAltitude(gain)
console.log(res)
