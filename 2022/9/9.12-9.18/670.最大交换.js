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
  const nums = [...("" + num)]
  const n = nums.length
  let maxIdx = n - 1
  let idx1 = -1
  let idx2 = -1
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] > nums[maxIdx]) {
      maxIdx = i
    } else if (nums[i] < nums[maxIdx]) {
      idx1 = i
      idx2 = maxIdx
    }
  }

  if (idx1 >= 0) {
    swap(nums, idx1, idx2)
    return Number(nums.join(""))
  } else {
    return num
  }
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
num = 98368
num = 10010
num = 34369
// num = 2765
// num = 1993
var res = maximumSwap(num)
console.log(res)
