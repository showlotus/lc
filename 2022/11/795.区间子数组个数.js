/*
 * @lc app=leetcode.cn id=795 lang=javascript
 *
 * [795] 区间子数组个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  const n = nums.length
  const leftMax = new Array(n).fill(-1)
  const rightMax = new Array(n).fill(n)
  let stack = []
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
      stack.pop()
    }
    leftMax[i] = stack.length ? stack[stack.length - 1] : -1
    stack.push(i)
  }
  stack = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      stack.pop()
    }
    rightMax[i] = stack.length ? stack[stack.length - 1] : n
    stack.push(i)
  }

  let res = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] >= left && nums[i] <= right) {
      res += (i - leftMax[i]) * (rightMax[i] - i)
    }
  }
  return res
}
// @lc code=end
let nums = [2, 1, 4, 3]
let left = 2
let right = 3

nums = [2, 9, 2, 5, 6]
left = 2
right = 8

nums = [73, 55, 36, 5, 55, 14, 9, 7, 72, 52]
left = 32
right = 69

let res = numSubarrayBoundedMax(nums, left, right)
console.log(res)
