/*
 * @lc app=leetcode.cn id=1590 lang=javascript
 *
 * [1590] 使数组和能被 P 整除
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  // WARN 超时
  const n = nums.length
  const preSum = new Array(n + 1).fill(0)
  let res = n
  // nums[i] + ... + nums[j] = preSum[j + 1] - preSum[i]
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + nums[i]
  }
  if (preSum[n] % p === 0) return 0
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if ((preSum[n] - (preSum[j + 1] - preSum[i])) % p === 0) {
        res = Math.min(res, j - i + 1)
      }
    }
  }
  return res === n ? -1 : res
}
// @lc code=end

let nums = [3, 1, 4, 2]
let p = 6

// nums = [6, 3, 5, 2]
// p = 9

nums = [1, 2, 3]
p = 3

nums = [1, 2, 3]
p = 7

const res = minSubarray(nums, p)
console.log(res)
