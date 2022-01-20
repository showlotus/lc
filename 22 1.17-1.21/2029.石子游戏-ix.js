/*
 * @lc app=leetcode.cn id=2029 lang=javascript
 *
 * [2029] 石子游戏 IX
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
  let zero = 0,
    one = 0,
    two = 0
  stones.forEach(s => {
    if (s % 3 === 0) {
      zero++
    } else if (s % 3 === 1) {
      one++
    } else {
      two++
    }
  })
  if (zero % 2 === 0 && one > 0 && two > 0) return true
  if (zero % 2 === 1 && Math.abs(one - two) > 2) return true
  return false
}
// @lc code=end
var stones = [2, 1]
stones = [5, 1, 2, 4, 3]
console.log(stoneGameIX(stones))
