/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的 k-diff 数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  const visited = new Set()
  const res = new Set()
  for (const s of nums) {
    if (visited.has(s - k)) {
      res.add(s - k)
    }

    if (visited.has(s + k)) {
      res.add(s)
    }

    visited.add(s)
  }
  return res.size
}
// @lc code=end
var findPairs2 = function (nums, k) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const map = {}
  for (let i = 1; i < n; i++) {
    const j = binarySearch(nums, i - 1, nums[i] - k)
    if (j > -1 && !map[nums[i]]) {
      map[nums[i]] = 1
    }
  }
  return Object.keys(map).length
}

// 排序 + 双指针
var findPairs3 = function (nums, k) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let res = 0
  let j = 0
  for (let i = 0; i < n; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      while (j < n && (nums[j] < nums[i] + k || j <= i)) {
        j++
      }

      if (j < n && nums[j] === nums[i] + k) {
        res++
      }
    }
  }
  return res
}

var nums = [3, 1, 4, 1, 5]
var k = 2

nums = [1, 2, 3, 4, 5]
k = 1

nums = [1, 3, 1, 5, 4]
k = 2

nums = [1, 2, 4, 4, 3, 3, 0, 9, 2, 3]
k = 3

nums = [1, 3, 1, 5, 4, 4]
k = 0

nums = [1, 2, 3, 4, 5]
k = 2

console.log(findPairs(nums, k))
