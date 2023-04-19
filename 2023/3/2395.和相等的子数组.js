/*
 * @lc app=leetcode.cn id=2395 lang=javascript
 *
 * [2395] 和相等的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  const map = new Set()
  for (let i = 0; i < nums.length - 1; i++) {
    const sum = nums[i] + nums[i + 1]
    if (map.has(sum)) {
      return true
    }
    map.add(sum)
  }
  return false
}
// @lc code=end
let nums = [4, 2, 4]
nums = [1, 2, 3, 4, 5]
nums = [0, 0, 0]

const res = findSubarrays(nums)
console.log(res)
