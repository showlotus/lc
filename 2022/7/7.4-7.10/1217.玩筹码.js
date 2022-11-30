/*
 * @lc app=leetcode.cn id=1217 lang=javascript
 *
 * [1217] 玩筹码
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let oddNums = 0
  let evenNums = 0
  position.forEach(v => {
    v % 2 === 0 ? ++evenNums : ++oddNums
  })
  return Math.min(oddNums, evenNums)
}
// @lc code=end
