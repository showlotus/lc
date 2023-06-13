/*
 * @lc app=leetcode.cn id=2475 lang=javascript
 *
 * [2475] 数组中不等三元组的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
  const count = {}
  for (const s of nums) {
    count[s] = (count[s] || 0) + 1
  }

  const n = nums.length
  let res = 0
  let prevNum = 0
  for (const v in count) {
    res += prevNum * count[v] * (n - prevNum - count[v])
    prevNum += count[v]
  }
  return res
}
// @lc code=end
let nums = [4, 4, 2, 2, 3, 3, 3, 5]

const res = unequalTriplets(nums)
console.log(res)
