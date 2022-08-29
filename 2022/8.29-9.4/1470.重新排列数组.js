/*
 * @lc app=leetcode.cn id=1470 lang=javascript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  for (let i = 0; i < 2 * n; i++) {
    let j = i
    while (nums[i] > 0) {
      j = j < n ? 2 * j : 2 * (j - n) + 1
      swap(nums, i, j)
      nums[j] = -nums[j]
    }
  }

  for (const i in nums) {
    nums[i] = -nums[i]
  }

  return nums
}

function swap(nums, i, j) {
  ;[nums[i], nums[j]] = [nums[j], nums[i]]
}
// @lc code=end
var nums = [2, 5, 1, 3, 4, 7],
  n = 3

var res = shuffle(nums, n)
console.log(res)
