/*
 * @lc app=leetcode.cn id=593 lang=javascript
 *
 * [593] 有效的正方形
 */

// @lc code=start
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (a, b, c, d) {
  /**
   * 思路一：
   * 1. 先判断是否是平行四边形
   * 2. 再判断有一对相邻边相等
   * 3. 最后判断有一个角是直角
   */

  if (isParallelogram(a, b, c, d)) {
    return true
  }

  console.log(isParallelogram(a, b, c, d))

  return [a, b, c, d]
}

function isParallelogram(a, b, c, d) {
  return a[0] + b[0] === c[0] + d[0] && a[1] + b[1] === c[1] + d[1]
}
// @lc code=end

var p1 = [0, 0]
var p2 = [1, 1]
var p3 = [1, 0]
var p4 = [0, 1]

;(p1 = [0, 0]), (p2 = [1, 1]), (p3 = [1, 0]), (p4 = [0, 12])
;(p1 = [1, 0]), (p2 = [-1, 0]), (p3 = [0, 1]), (p4 = [0, -1])

var res = validSquare(p1, p2, p3, p4)

console.log(res)
