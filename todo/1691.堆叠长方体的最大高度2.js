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
  // 记忆化搜索
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
