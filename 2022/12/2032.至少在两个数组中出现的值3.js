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
  // 位运算计数
  const map = new Map()
  for (const v of nums1) {
    map.set(v, 1)
  }
  for (const v of nums2) {
    map.set(v, (map.get(v) || 0) | 2)
  }
  for (const v of nums3) {
    map.set(v, (map.get(v) || 0) | 4)
  }
  // 如果 n = 2 ^ m, 那么 n & (n - 1) == 0
  // 对于出现的次数，如果是 1, 2 或者 4, 说明只在一个数组中出现了
  // 不符合结果，也即 n & (n - 1) == 0
  // 而要找的结果需要满足 n & (n - 1) != 0
  const res = []
  for (const [key, v] of map.entries()) {
    if ((v & (v - 1)) !== 0) {
      res.push(key)
    }
  }
  return res
}
// @lc code=end
let nums1 = [1, 1, 3, 2]
let nums2 = [2, 3]
let nums3 = [3]

nums1 = [3, 1]
nums2 = [2, 3]
nums3 = [1, 2]

// nums1 = [1, 2, 2]
// nums2 = [4, 3, 3]
// nums3 = [5]

const res = twoOutOfThree(nums1, nums2, nums3)
console.log(res)
