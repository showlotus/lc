/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const n = nums.length
  let left = 0
  let right = n - 1

  while (true) {
    const idx = partition(nums, left, right)
    if (idx === k - 1) {
      return nums[idx]
    } else if (idx < k - 1) {
      left = idx + 1
    } else {
      right = idx - 1
    }
  }
}

function partition(nums, left, right) {
  const curr = nums[left]
  let j = left
  for (let i = left + 1; i <= right; i++) {
    if (nums[i] > curr) {
      j++
      ;[nums[j], nums[i]] = [nums[i], nums[j]]
    }
  }
  ;[nums[j], nums[left]] = [nums[left], nums[j]]
  return j
}

// @lc code=end
var nums = [3, 2, 1, 5, 6, 4]
var k = 2

// nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
// k = 4
// nums = [1];
// k = 1;
console.log(findKthLargest(nums, k))
