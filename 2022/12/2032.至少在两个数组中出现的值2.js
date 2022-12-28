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
   * 两两求交集，最后合并交集，并对合并后的结果去重
   */
  return [
    ...new Set([
      ...getIntersection(nums1, nums2),
      ...getIntersection(nums1, nums3),
      ...getIntersection(nums2, nums3)
    ])
  ]
}

const getIntersection = (arr1, arr2) => {
  return arr1.filter(v => arr2.includes(v))
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
