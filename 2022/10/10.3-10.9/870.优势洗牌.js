/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  const n = nums1.length
  const idx1 = new Array(n).fill(0).map((_, i) => i)
  const idx2 = new Array(n).fill(0).map((_, i) => i)
  idx1.sort((i, j) => nums1[i] - nums1[j])
  idx2.sort((i, j) => nums2[i] - nums2[j])
  let left = 0
  let right = n - 1
  const res = new Array(n).fill(0)
  idx1.forEach(i => {
    if (nums1[i] > nums2[idx2[left]]) {
      res[idx2[left]] = nums1[i]
      ++left
    } else {
      res[idx2[right]] = nums1[i]
      --right
    }
  })
  return res
}
// @lc code=end
let nums1 = [2, 7, 11, 15]
let nums2 = [1, 10, 4, 11]

// nums1 = [12, 24, 8, 32]
// nums2 = [13, 25, 32, 11]

let res = advantageCount(nums1, nums2)
console.log(res)
