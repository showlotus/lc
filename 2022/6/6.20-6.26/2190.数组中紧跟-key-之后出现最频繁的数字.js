/*
 * @lc app=leetcode.cn id=2190 lang=javascript
 *
 * [2190] 数组中紧跟 key 之后出现最频繁的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
  const map = {}
  let maxCount = 0
  let res
  for (let i = 0, len = nums.length; i < len - 1; i++) {
    if (nums[i] === key) {
      const target = nums[i + 1]
      if (!map[target]) {
        map[target] = 0
      }
      map[target]++
      if (map[target] > maxCount) {
        maxCount = map[target]
        res = target
      }
    }
  }
  return res
}
// @lc code=end
var nums = [1, 100, 200, 1, 100]
var key = 1

nums = [2, 2, 2, 2, 3]
key = 2

nums = [2, 2, 3, 2, 4, 2, 5, 2, 5]

console.log(mostFrequent(nums, key))
