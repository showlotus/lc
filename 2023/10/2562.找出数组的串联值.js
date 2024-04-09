/*
 * @lc app=leetcode.cn id=2562 lang=javascript
 *
 * [2562] 找出数组的串联值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let res = 0
  while (nums.length) {
    if (nums.length > 1) {
      const first = nums.shift()
      const last = nums.pop()
      const newNum = Number(`${first}${last}`)
      res += newNum
    } else {
      res += nums.pop()
    }
  }
  return res
}
// @lc code=end
let nums = [7, 52, 2, 4]
nums = [5, 14, 13, 8, 12]
nums = [2]
nums = [2, 8]

const res = findTheArrayConcVal(nums)
console.log(res)
