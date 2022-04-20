/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let len = nums.length
  if (len === 1) return 1

  let dp = new Array(len).fill(1)
  let res = 0
  for (let i = len - 1; i >= 0; i--) {
    let maxLen = 0
    for (let j = len - 1; j > i; j--) {
      if (nums[j] > nums[i]) {
        maxLen = Math.max(maxLen, dp[j])
      }
    }
    dp[i] = maxLen + 1
    res = Math.max(res, dp[i])
  }
  return res
}
// @lc code=end

// TODO 二分优化
var lengthOfLIS_binary = function (nums) {
  let len = nums.length
  if (len === 1) return 1
  let arr = [nums[len - 1]]
  for (let [v, i] of nums.entries()) {
    if (i === 0) continue

    if (v > arr[arr.length - 1]) {
      arr.push(v)
    } else if (v < arr[arr.length - 1]) {
    }
  }
}

var nums = [0, 1, 0, 3, 2, 3]
nums = [10, 9, 2, 5, 3, 7, 101, 18]
nums = [7, 7, 7, 7, 7, 7, 7]
nums = [7]
console.log(lengthOfLIS(nums))
