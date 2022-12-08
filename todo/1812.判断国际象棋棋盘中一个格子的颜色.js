/*
 * @lc app=leetcode.cn id=1812 lang=javascript
 *
 * [1812] 判断国际象棋棋盘中一个格子的颜色
 */

// @lc code=start
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  // 横坐标索引以 0 开始
  // 纵坐标索引以 1 开始
  // 同为奇数或偶数时，即为白格
  return (
    +coordinates[1] % 2 ===
    (coordinates[0].charCodeAt(0) - "a".charCodeAt(0)) % 2
  )
}
// @lc code=end
let coordinates = "a1"
coordinates = "h3"
coordinates = "f7"
const res = squareIsWhite(coordinates)
console.log(res)
