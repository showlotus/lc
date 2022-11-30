/*
 * @lc app=leetcode.cn id=1037 lang=javascript
 *
 * [1037] 有效的回旋镖
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  // 三点是否共线，两向量叉积不为0
  const v1 = [points[1][0] - points[0][0], points[1][1] - points[0][1]]
  const v2 = [points[2][0] - points[0][0], points[2][1] - points[0][1]]
  return v1[0] * v2[1] - v1[1] * v2[0] !== 0
}
// @lc code=end

var points = [
  [1, 1],
  [2, 3],
  [3, 2]
]

points = [
  [1, 1],
  [2, 2],
  [3, 3]
]

console.log(isBoomerang(points))
