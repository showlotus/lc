/*
 * @lc app=leetcode.cn id=2215 lang=javascript
 *
 * [2215] 找出两数组的不同
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  return [diff(nums1, nums2), diff(nums2, nums1)]
}

function diff(arr1, arr2) {
  const map = new Map(arr2.map(v => [v, 1]))
  return arr1.filter((v, i) => !map.has(v) && i === arr1.indexOf(v))
}
// @lc code=end
var nums1 = [1, 2, 3]
var nums2 = [2, 4, 6]

nums1 = [1, 2, 3, 3]
nums2 = [1, 1, 2, 2]

console.log(findDifference(nums1, nums2))
