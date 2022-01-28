/*
 * @lc app=leetcode.cn id=1996 lang=javascript
 *
 * [1996] 游戏中弱角色的数量
 */

// @lc code=start
/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  properties.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]))
  let res = 0
  let maxDefense = properties[0][1]
  for (let [i, [, defense]] of properties.entries()) {
    if (i === 0) continue
    if (defense < maxDefense) {
      res++
    }
    maxDefense = Math.max(maxDefense, defense)
  }
  return res
}
// @lc code=end
var properties = [
  [5, 5],
  [6, 3],
  [3, 6],
]
properties = [
  [1, 5],
  [10, 4],
  [4, 3],
]
properties = [
  [2, 2],
  [3, 3],
]
console.log(numberOfWeakCharacters(properties))
