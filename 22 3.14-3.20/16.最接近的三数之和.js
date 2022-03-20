/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let res = Number.MAX_SAFE_INTEGER
  nums.sort((a, b) => a - b)
  for (let i = 0, len = nums.length; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let j = i + 1
    let k = len - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === target) return sum
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }

      if (sum > target) {
        let k1 = k - 1
        while (j < k1 && nums[k] === nums[k1]) {
          k--
        }
        k = k1
      } else if (sum < target) {
        let j1 = j + 1
        while (j1 < k && nums[j] === nums[j1]) {
          j1++
        }
        j = j1
      }
    }
  }
  return res
}
// @lc code=end
var nums = [-1, 2, 1, -4],
  target = 1
;(nums = [0, 0, 0]), (target = 1)
console.log(threeSumClosest(nums, target))
