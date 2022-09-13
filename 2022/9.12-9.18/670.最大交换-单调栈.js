/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const nums = String(num).split("").map(Number)
  const n = nums.length
  const nextMax = new Array(n).fill(-1)
  const stack = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      stack.pop()
    }
    nextMax[i] = stack.length ? stack[stack.length - 1] : -1
    if (!stack.length || nums[i] > nums[stack[stack.length - 1]]) {
      stack.push(i)
    }
  }
  for (let i = 0; i < n; i++) {
    if (nextMax[i] > -1 && nums[i] !== nums[nextMax[i]]) {
      swap(nums, i, nextMax[i])
      return Number(nums.join(""))
    }
  }
  return num
}

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
// @lc code=end
var num = 2736
// num = 9081
// num = 1
num = 10320
num = 9876
// num = 10010
// num = 34369
num = 98368
// num = 1993
num = 2765
var res = maximumSwap(num)
console.log(res)
