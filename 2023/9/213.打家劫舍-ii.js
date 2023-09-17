/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  return Math.max(
    computedMaxAmount(nums, 0, nums.length - 2),
    computedMaxAmount(nums, 1, nums.length - 1)
  )
}

const computedMaxAmount = (nums, start, end) => {
  if (nums.length === 1) {
    return nums[0]
  } else if (nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }

  let first = nums[start]
  let second = Math.max(nums[start], nums[start + 1])
  let res = second
  for (let i = start + 2; i <= end; i++) {
    res = Math.max(first + nums[i], second)
    first = second
    second = res
  }
  return res
}
// @lc code=end
let nums = [2, 3, 2]
// nums = [1, 2, 3, 1]
// nums = [1, 2]

const res = rob(nums)
console.log(res)
