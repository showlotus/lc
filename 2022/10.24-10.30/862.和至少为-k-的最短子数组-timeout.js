/*
 * @lc app=leetcode.cn id=862 lang=javascript
 *
 * [862] 和至少为 K 的最短子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  const n = nums.length
  const preSum = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1]
  }
  let res = n + 1
  // 当数量级为 10⁵ 时，时间复杂度为 O(n²) 的算法，一定会超时
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (preSum[j + 1] - preSum[i] >= k) {
        res = Math.min(res, j - i + 1)
      }
    }
  }
  return res > n ? -1 : res
}
// @lc code=end
let nums = [1],
  k = 1

;(nums = [1, 2]), (k = 4)
;(nums = [2, -1, 2]), (k = 3)

let res = shortestSubarray(nums, k)
console.log(res)
