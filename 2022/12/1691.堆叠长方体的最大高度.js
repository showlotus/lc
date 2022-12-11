/*
 * @lc app=leetcode.cn id=1691 lang=javascript
 *
 * [1691] 堆叠长方体的最大高度
 */

// @lc code=start
/**
 * @param {number[][]} cuboids
 * @return {number}
 */
var maxHeight = function (cuboids) {
  const n = cuboids.length
  for (const cuboid of cuboids) {
    cuboid.sort((a, b) => a - b)
  }
  cuboids.sort((a, b) => a[0] + a[1] + a[2] - (b[0] + b[1] + b[2]))
  const dp = new Array(n).fill(0)
  let res = 0
  for (let i = 0; i < n; i++) {
    dp[i] = cuboids[i][2]
    for (let j = 0; j < i; j++) {
      if (
        cuboids[j][0] <= cuboids[i][0] &&
        cuboids[j][1] <= cuboids[i][1] &&
        cuboids[j][2] <= cuboids[i][2]
      ) {
        dp[i] = Math.max(dp[i], dp[j] + cuboids[i][2])
      }
    }
    res = Math.max(res, dp[i])
  }
  return res
}
// @lc code=end
let cuboids = [
  [50, 45, 20],
  [95, 37, 53],
  [45, 23, 12]
]
cuboids = [
  [38, 25, 45],
  [76, 35, 3]
]
cuboids = [
  [36, 46, 41],
  [15, 100, 100],
  [75, 91, 59],
  [13, 82, 64]
]
const res = maxHeight(cuboids)
console.log(res)
