/*
 * @lc app=leetcode.cn id=2404 lang=javascript
 *
 * [2404] 出现最频繁的偶数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  let res = Infinity
  let max = 0
  const map = new Map()
  for (const v of nums) {
    if (v % 2 === 0) {
      map.set(v, (map.get(v) || 0) + 1)
      if (map.get(v) === max) {
        res = Math.min(res, v)
      } else if (map.get(v) > max) {
        max = map.get(v)
        res = v
      }
    }
  }
  return res === Infinity ? -1 : res
}
// @lc code=end
let nums = [0, 1, 2, 2, 4, 4, 1]
nums = [1, 3, 5]

const res = mostFrequentEven(nums)
console.log(res)
