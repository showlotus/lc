/*
 * @lc app=leetcode.cn id=2465 lang=javascript
 *
 * [2465] 不同的平均值数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  const map = new Set()
  nums.sort((a, b) => a - b)
  for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
    const avgNum = (nums[i] + nums[j]) / 2
    if (!map.has(avgNum)) {
      map.add(avgNum)
    }
  }
  return map.size
}
// @lc code=end
let nums = [4, 1, 4, 0, 3, 5]
nums = [1, 100]
nums = [1, 2, 99, 100]

const res = distinctAverages(nums)
console.log(res)
