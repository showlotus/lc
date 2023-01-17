/*
 * @lc app=leetcode.cn id=2293 lang=javascript
 *
 * [2293] 极大极小游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  while (nums.length > 1) {
    const newNums = new Array(nums.length / 2).fill(0)
    for (let i = 0; i < newNums.length; i++) {
      if (i % 2 === 0) {
        newNums[i] = Math.min(nums[i * 2], nums[i * 2 + 1])
      } else {
        newNums[i] = Math.max(nums[i * 2], nums[i * 2 + 1])
      }
    }
    nums = newNums
  }
  return nums[0]
}
// @lc code=end
let nums = [1, 3, 5, 2, 4, 8, 2, 2]
nums = [3]

const res = minMaxGame(nums)
console.log(res)
