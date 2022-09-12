/*
 * @lc app=leetcode.cn id=1608 lang=javascript
 *
 * [1608] 特殊数组的特征值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => b - a)
  const n = nums.length
  for (let i = 1; i <= n; i++) {
    if (nums[i - 1] >= i && (i === n || nums[i] < i)) {
      return i
    }
  }
  return -1
}

// @lc code=end
var nums = [0, 4, 3, 0, 4]
// nums = [3, 6, 7, 7, 0]
// nums = [0, 0]
// nums = [3, 5]
// nums = [3]
// nums = [1, 0, 0, 6, 4, 9]
var res = specialArray(nums)
console.log(res)
