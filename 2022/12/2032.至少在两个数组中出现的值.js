/*
 * @lc app=leetcode.cn id=2032 lang=javascript
 *
 * [2032] 至少在两个数组中出现的值
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  /**
   * 去重后，计数，如果数量大于等于 2，则放进结果数组中
   */
  const map = new Map()
  ;[nums1, nums2, nums3].forEach(nums => {
    nums = new Set(nums)
    nums.forEach(v => {
      map.set(v, (map.get(v) || 0) + 1)
    })
  })

  const res = []
  map.forEach((val, key) => {
    if (val >= 2) {
      res.push(key)
    }
  })
  return res
}
// @lc code=end
let nums1 = [1, 1, 3, 2]
let nums2 = [2, 3]
let nums3 = [3]

nums1 = [3, 1]
nums2 = [2, 3]
nums3 = [1, 2]

nums1 = [1, 2, 2]
nums2 = [4, 3, 3]
nums3 = [5]

const res = twoOutOfThree(nums1, nums2, nums3)
console.log(res)
