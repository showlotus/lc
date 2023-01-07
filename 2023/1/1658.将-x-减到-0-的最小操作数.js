/*
 * @lc app=leetcode.cn id=1658 lang=javascript
 *
 * [1658] 将 x 减到 0 的最小操作数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const n = nums.length
  const sum = nums.reduce((res, curr) => res + curr, 0)

  if (sum < x) {
    return -1
  }

  let right = 0
  let lSum = 0
  let rSum = sum
  let res = n + 1

  for (let left = -1; left < n; left++) {
    if (left !== -1) {
      lSum += nums[left]
    }

    while (right < n && lSum + rSum > x) {
      rSum -= nums[right++]
    }

    if (lSum + rSum === x) {
      res = Math.min(res, left + 1 + n - right)
    }
  }

  return res > n ? -1 : res
}
// @lc code=end
let nums = [1, 1, 4, 2, 3]
let x = 5

const res = minOperations(nums, x)
console.log(res)
