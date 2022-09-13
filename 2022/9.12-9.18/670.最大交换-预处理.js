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
  let maxIdx = -1
  for (let i = n - 1; i >= 0; i--) {
    if (maxIdx === -1 || nums[i] >= nums[maxIdx]) {
      nextMax[i] = -1
    } else {
      nextMax[i] = maxIdx
    }
    if (maxIdx === -1 || nums[i] > nums[maxIdx]) {
      maxIdx = i
    }
  }
  for (let i = 0; i < n; i++) {
    if (nextMax[i] > -1) {
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
num = 2765
num = 1993
var res = maximumSwap(num)
console.log(res)
