/*
 * @lc app=leetcode.cn id=324 lang=javascript
 *
 * [324] 摆动排序 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let left = (n >> 1) - (n % 2 === 0 ? 1 : 0)
  let right = n - 1
  const res = []
  for (let i = 0; i < n; ++i) {
    res.push(i % 2 === 0 ? nums[left--] : nums[right--])
  }

  res.forEach((v, i) => (nums[i] = v))
}
// @lc code=end
/**
 * 排序 + 双指针 O(N*logN) + O(N)
 * @param {array} nums
 */
var wiggleSort_ = function (nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let left = (n >> 1) - (n % 2 === 0 ? 1 : 0)
  let right = n - 1
  const res = []
  for (let i = 0; i < n; ++i) {
    res.push(i % 2 === 0 ? nums[left--] : nums[right--])
  }

  res.forEach((v, i) => (nums[i] = v))
}

var nums = [1, 5, 1, 1, 6, 4]
nums = [1, 3, 2, 2, 3]
nums = [1, 1, 2]
wiggleSort(nums)

console.log(nums)
