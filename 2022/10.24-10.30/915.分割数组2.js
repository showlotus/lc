/*
 * @lc app=leetcode.cn id=915 lang=javascript
 *
 * [915] 分割数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  const n = nums.length
  // rightMin[i]: 从第 i - 1 个元素到结尾元素中的最小值
  const rightMin = new Array(n + 1).fill(Number.MAX_VALUE)
  for (let i = n - 1; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], nums[i])
  }
  let leftMax = nums[0]
  for (let i = 1; i < n; i++) {
    if (leftMax <= rightMin[i]) {
      return i
    }
    leftMax = Math.max(leftMax, nums[i])
  }
}
// @lc code=end
let nums = [5, 0, 3, 8, 6]
nums = [6, 2, 3, 6]
nums = [3, 2, 3, 6]
nums = [2, 3]
nums = [1, 1, 1, 0, 6, 12]
let res = partitionDisjoint(nums)
console.log(res)
