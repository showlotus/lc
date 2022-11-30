/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let res = []
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      let third = j + 1
      let fourth = n - 1
      while (third < fourth) {
        let sum = nums[i] + nums[j] + nums[third] + nums[fourth]
        if (sum < target) {
          third++
        } else if (sum > target) {
          fourth--
        } else {
          res.push([nums[i], nums[j], nums[third], nums[fourth]])
          while (third < fourth && nums[third + 1] === nums[third]) {
            third++
          }
          third++

          while (third < fourth && nums[fourth - 1] === nums[fourth]) {
            fourth--
          }
          fourth--
        }
      }

      while (j < n - 2 && nums[j + 1] === nums[j]) {
        j++
      }
    }

    while (i < n && nums[i + 1] === nums[i]) {
      i++
    }
  }
  return res
}
// @lc code=end
var nums = [2, 2, 2, 2, 2],
  target = 8
;(nums = [1, 0, -1, 0, -2, 2]), (target = 0)
;(nums = [-3, -2, -1, 0, 0, 1, 2, 3]), (target = 0)
;(nums = [-2, -1, -1, 1, 1, 2, 2]), (target = 0)
console.log(fourSum(nums, target))
