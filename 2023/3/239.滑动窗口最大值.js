/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 单调队列
  const n = nums.length
  const queue = []
  for (let i = 0; i < k; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop()
    }
    queue.push(i)
  }
  const res = [nums[queue[0]]]
  for (let i = k; i < n; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop()
    }
    queue.push(i)
    while (queue[0] <= i - k) {
      queue.shift()
    }
    res.push(nums[queue[0]])
  }
  return res
}
// @lc code=end
let nums = [1, 3, -1, -3, 5, 3, 6, 7]
let k = 3

const res = maxSlidingWindow(nums, k)
console.log(res)
