/*
 * @lc app=leetcode.cn id=1608 lang=javascript
 *
 * [1608] 特殊数组的特征值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  /**
   * 先从小到大排序，然后在 min ~ max 之间二分枚举 mid = (l + r) >> 1
   * 二分查找大于等于 mid 的最小索引 idx
   * 如果 n - idx > mid，说明 mid 偏小，l = mid + 1
   * 如果 n - idx < mid，说明 mid 偏大，r = mid - 1
   * 如果 n - idx == mid，直接 return mid
   */
  nums.sort((a, b) => a - b)
  const n = nums.length
  let l = nums[0]
  let r = nums[n - 1]
  if (l > n) {
    return n
  }

  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    const idx = binarySearch(nums, mid)
    if (n - idx > mid) {
      l = mid + 1
    } else if (n - idx < mid) {
      r = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

function binarySearch(arr, target) {
  let l = 0
  let r = arr.length
  while (l < r) {
    const mid = (l + r) >> 1
    if (arr[mid] < target) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return l
}
// @lc code=end
var nums = [0, 4, 3, 0, 4]
// nums = [3, 6, 7, 7, 0]
// nums = [0, 0]
// nums = [3, 5]
// nums = [3]
// nums = [1, 0, 0, 6, 4, 9]
var res = specialArray(nums)
console.log(res)
