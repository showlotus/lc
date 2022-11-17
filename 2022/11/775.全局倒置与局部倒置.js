/*
 * @lc app=leetcode.cn id=775 lang=javascript
 *
 * [775] 全局倒置与局部倒置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function (nums) {
  /*
   * 思路：全局倒置一定包含局部倒置
   * 如果存在一个非局部倒置的全局倒置，则一定为 false
   * 等价于，对于索引为 i 的元素，如果存在 j (j > i)
   * 使得 nums[j] < nums[i] && j - i > 1，即 nums[i] > Min(nums[i + 2], nums[i + 3]...nums[n - 1])
   * 那么就返回 false
   * 用一个变量记录后面若干元素的最小值 min，从索引 n - 3 开始倒序遍历，min 起始值为 nums[n - 1]
   * 如果 nums[i] > min，返回 false
   * 每轮循环都需要更新 min = Math.min(min, nums[i + 1])
   */
  const n = nums.length
  let min = nums[n - 1]
  for (let i = n - 3; i >= 0; i--) {
    if (nums[i] > min) {
      return false
    }
    min = Math.min(min, nums[i + 1])
  }
  return true
}
// @lc code=end
let nums = [1, 0, 2]
// nums = [1, 2, 0]
nums = [2, 0, 3, 1]
nums = [1, 2, 0]
nums = [2, 0, 1]
nums = [1, 0, 3, 2]

let res = isIdealPermutation(nums)
console.log(res)
