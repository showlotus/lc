/*
 * @lc app=leetcode.cn id=719 lang=javascript
 *
 * [719] 找出第 K 小的数对距离
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b)
  const max = nums[nums.length - 1]
  const min = nums[0]
  let left = 0
  let right = max - min
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    let cnt = 0
    for (let i = 0, j = 0, len = nums.length; j < len; j++) {
      while (nums[j] - nums[i] > mid) {
        i++
      }
      cnt += j - i
    }
    if (cnt >= k) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}
// @lc code=end

// 寻找数组中，两数差的绝对值小于等于 target 的个数，双指针
function twoNumDiffCounts(nums, target) {
  nums.sort((a, b) => a - b)

  let count = 0
  for (let i = 0, j = 0, len = nums.length; j < len; j++) {
    while (nums[j] - nums[i] > target) {
      i++
    }
    count += j - i
  }
  return count
}

let k
let nums = [1, 3, 1]
k = 1
nums = [0, 1, 2, 2, 2, 3, 4, 6, 7, 9]
let res = smallestDistancePair(nums, 25)
console.log(res)
