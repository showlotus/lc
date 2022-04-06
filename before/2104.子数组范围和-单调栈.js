/*
 * @lc app=leetcode.cn id=2104 lang=javascript
 *
 * [2104] 子数组范围和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  /**
   * 子数组最大值与最小值差值的和 == 子数组最大值之和 - 子数组最小值之和
   * 对于 nums[i]，以 nums[i] 为最小值的子数组数量 == (k - i) * (i - j)
   * j: 左侧距离 nums[i] 最近的，比 nums[i] 小的元素索引
   * k: 右侧距离 nums[i] 最近的，比 nums[i] 小的元素索引
   * ! 对于 nums[i] === nums[j]，若 i < j，则认为 nums[i] < nums[j]
   */
  let len = nums.length
  let minLeft = new Array(len)
  let minRight = new Array(len)
  let maxLeft = new Array(len)
  let maxRight = new Array(len)
  let stackMin = []
  let stackMax = []
  let sumMin = 0
  let sumMax = 0
  for (let i = 0; i < len; i++) {
    while (stackMin.length && nums[stackMin[stackMin.length - 1]] > nums[i]) {
      stackMin.pop()
    }
    minLeft[i] = stackMin.length ? stackMin[stackMin.length - 1] : -1
    stackMin.push(i)

    while (stackMax.length && nums[stackMax[stackMax.length - 1]] <= nums[i]) {
      stackMax.pop()
    }
    maxLeft[i] = stackMax.length ? stackMax[stackMax.length - 1] : -1
    stackMax.push(i)
  }

  stackMin = []
  stackMax = []
  for (let i = len - 1; i >= 0; i--) {
    while (stackMin.length && nums[stackMin[stackMin.length - 1]] >= nums[i]) {
      stackMin.pop()
    }
    minRight[i] = stackMin.length ? stackMin[stackMin.length - 1] : len
    stackMin.push(i)

    while (stackMax.length && nums[stackMax[stackMax.length - 1]] < nums[i]) {
      stackMax.pop()
    }
    maxRight[i] = stackMax.length ? stackMax[stackMax.length - 1] : len
    stackMax.push(i)
  }

  for (let i = 0; i < len; i++) {
    sumMin += (minRight[i] - i) * (i - minLeft[i]) * nums[i]
    sumMax += (maxRight[i] - i) * (i - maxLeft[i]) * nums[i]
  }

  return sumMax - sumMin
}
// @lc code=end
var nums = [1, 2, 3]
// nums = [1, 3, 3]
nums = [4, -2, -3, 4, 1]
// nums = [4, -3, -3, 4, 1]
nums = [1, 2]
console.log(subArrayRanges(nums))
