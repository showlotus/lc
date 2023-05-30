/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map = new Set()
  for (const n of nums1) {
    if (!map.has(n)) {
      map.add(n)
    }
  }

  const res = new Set()
  for (const n of nums2) {
    if (map.has(n) && !res.has(n)) {
      res.add(n)
    }
  }

  return [...res]
}
// @lc code=end
let nums1 = [1, 2, 2, 1]
let nums2 = [2, 2]

nums1 = [4, 9, 5]
nums2 = [9, 4, 9, 8, 4]

const res = intersection(nums1, nums2)
console.log(res)
