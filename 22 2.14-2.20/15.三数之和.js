/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return []
  nums.sort((a, b) => a - b)
  let len = nums.length
  let res = []
  let first = 0
  while (first <= len - 2) {
    for (let second = first + 1; second < len - 1; ) {
      let third = -(nums[first] + nums[second])
      let l = second + 1
      let r = len - 1
      while (l <= r) {
        let mid = (l + r) >> 1
        if (nums[mid] > third) {
          r = mid - 1
        } else if (nums[mid] < third) {
          l = mid + 1
        } else {
          res.push([nums[first], nums[second], nums[mid]])
          break
        }
      }
      let t = nums[second]
      while (t === nums[++second]);
    }
    let t = nums[first]
    while (t === nums[++first]);
  }
  return res
}
// @lc code=end
var nums = [-1, 0, 1, 2, -1, -4]
nums = [-2, 0, 1, 1, 2]
nums = [-4, -2, -2, -1, 0, 0, 1, 2, 3, 4]
nums = [1, 2, 3, -3, 0]
nums = [0, 0, 0]
console.log(threeSum(nums))
