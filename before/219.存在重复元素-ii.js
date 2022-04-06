/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let list = []
  for (let [i, v] of nums.entries()) {
    if (i <= k) {
      if (list.includes(v)) return true
      list.push(v)
      continue
    }
    list.shift()
    if (list.includes(v)) return true
    list.push(v)
  }
  return false
}
// @lc code=end

var containsNearbyDuplicate_optimize = function (nums, k) {
  let list = new Map()
  for (let [i, v] of nums.entries()) {
    if (i <= k) {
      if (list.has(v)) return true
      list.set(v, 0)
      continue
    }
    list.delete(nums[i - k - 1])
    if (list.has(v)) return true
    list.set(v, 0)
  }
  return false
}

var nums = [1, 2, 3, 1],
  k = 3
;(nums = [1, 0, 1, 1]), (k = 1)
// ;(nums = [1, 2, 3, 1, 2, 3]), (k = 2)
// ;(nums = [1, 2, 1]), (k = 2)
console.log(containsNearbyDuplicate(nums, k))
console.log(containsNearbyDuplicate_optimize(nums, k))
