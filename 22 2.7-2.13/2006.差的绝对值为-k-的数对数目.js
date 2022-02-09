/*
 * @lc app=leetcode.cn id=2006 lang=javascript
 *
 * [2006] 差的绝对值为 K 的数对数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  /**
   * 根据题意可推出，将数组排序后，下标 i < j，nums[j] - nums[i] == k，同样符合题意
   */
  if (nums.length <= 1) return 0
  let res = 0
  let len = nums.length
  nums.sort((a, b) => a - b)
  nums.forEach((t, i) => {
    let left = i + 1
    let right = len - 1
    while (left <= right) {
      let middle = (left + right) >> 1
      if (nums[middle] - t > k) {
        right = middle - 1
      } else if (nums[middle] - t < k) {
        left = middle + 1
      } else {
        // 从该处向两端遍历查找相同值
        for (let j = middle, k = middle + 1; j >= 0 || k < len; --j, ++k) {
          j >= 0 && nums[j] === nums[middle] && ++res
          k < len && nums[k] === nums[middle] && ++res
        }
        break
      }
    }
  })
  return res
};
// @lc code=end

var nums = [1, 2, 2, 1], k = 1
nums = [1, 3], k = 3
nums = [3, 2, 1, 5, 4], k = 2
nums = [1]

console.log(countKDifference(nums, k))
