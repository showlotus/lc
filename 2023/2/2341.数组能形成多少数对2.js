/*
 * @lc app=leetcode.cn id=2341 lang=javascript
 *
 * [2341] 数组能形成多少数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const map = new Map()
  let pairs = 0
  for (const num of nums) {
    map.set(num, !(map.get(num) || false))
    if (!map.get(num)) {
      pairs++
    }
  }
  return [pairs, nums.length - pairs * 2]
}
// @lc code=end
let nums = [1, 3, 2, 1, 3, 2, 2]
nums = [1, 1]
nums = [0]

const res = numberOfPairs(nums)

console.log(res)
