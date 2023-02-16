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
  const map = new Set()
  let pairs = 0
  for (const num of nums) {
    if (map.has(num)) {
      map.delete(num)
      pairs++
    } else {
      map.add(num)
    }
  }
  return [pairs, map.size]
}
// @lc code=end
let nums = [1, 3, 2, 1, 3, 2, 2]
nums = [1, 1]
nums = [0]

const res = numberOfPairs(nums)

console.log(res)
