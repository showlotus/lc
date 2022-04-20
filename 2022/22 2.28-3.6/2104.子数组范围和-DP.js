/*
 * @lc app=leetcode.cn id=2104 lang=javascript
 *
 * [2104] 子数组范围和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
class node {
  constructor() {
    this.min
    this.max
  }

  range() {
    return this.max - this.min
  }
}
var subArrayRanges = function (nums) {
  let len = nums.length
  let dp = new Array(len).fill(0).map(() => new Array(len).fill(0))

  for (let row of dp) {
    for (let col in row) {
      row[col] = new node()
    }
  }

  // init
  for (let i = 0; i < len; i++) {
    dp[i][i].min = nums[i]
    dp[i][i].max = nums[i]
  }

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      dp[i][j].min = Math.min(dp[i][j - 1].min, nums[j])
      dp[i][j].max = Math.max(dp[i][j - 1].max, nums[j])
    }
  }

  let sum = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      sum += dp[i][j].range()
    }
  }

  return sum
}
// @lc code=end
var nums = [1, 2, 3]
nums = [1, 3, 3]
nums = [4, -2, -3, 4, 1]
nums = [1]
console.log(subArrayRanges(nums))
// console.log(reg.test(text) && reg.test(text))
