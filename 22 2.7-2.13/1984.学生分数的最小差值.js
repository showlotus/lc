/*
 * @lc app=leetcode.cn id=1984 lang=javascript
 *
 * [1984] 学生分数的最小差值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (k === 1) return 0
  nums.sort((a, b) => b - a)
  let res = Number.MAX_SAFE_INTEGER
  let len = nums.length
  let l = 0
  let r = k - 1
  while (r < len) {
    res = Math.min(res, nums[l++] - nums[r++])
  }
  return res
};
// @lc code=end

var nums = [9, 4, 1, 7], k = 2
// nums = [90], k = 1
// nums = [87063, 61094, 44530, 21297, 95857, 93551, 9918], k = 6
console.log(minimumDifference(nums, k))
