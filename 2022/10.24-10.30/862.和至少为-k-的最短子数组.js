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
  const queue = []
  for (let i = 0; i <= n; i++) {
    const currSum = preSum[i]
    while (queue.length && currSum - preSum[queue[0]] >= k) {
      // 当前值 - 队列第一项 >= k
      // 即满足条件，更新结果长度
      // 如果后续存在 j (j > i) 使得 preSum[j] - preSum[queue[0]] >= k
      // 那么 j - queue[0] 一定大于当前结果长度 res，也即已经找到了以索引 queue[0] 开头的最小长度
      // 后续情况都无需考虑，所以需要移除队列中的第一项
      res = Math.min(res, i - queue.shift())
    }
    while (queue.length && preSum[queue[queue.length - 1]] >= currSum) {
      // 如果队列中的存在索引 m
      // 为了使 currSum - preSum[m] >= k 成立，preSum[m] 应该越小越好
      // 因为 k >= 1，也即对于 preSum[m] >= currSum 的，要从队列中移除
      queue.pop()
    }
    queue.push(i)
  }
  return res > n ? -1 : res
}
// @lc code=end
let nums = [1],
  k = 1

;(nums = [1, 2]), (k = 4)
// ;(nums = [2, -1, 2]), (k = 3)
// ;(nums = [2, -1, 2]), (k = 2)

let res = shortestSubarray(nums, k)
console.log(res)
