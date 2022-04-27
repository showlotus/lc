/*
 * @lc app=leetcode.cn id=2044 lang=javascript
 *
 * [2044] 统计按位或能得到最大值的子集数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let maxOr = 0
  let cnt = 0
  let len = nums.length
  const dfs = (n, val) => {
    if (n === len) {
      if (val > maxOr) {
        maxOr = val
        cnt = 1
      } else if (val === maxOr) {
        cnt++
      }
      return
    }
    dfs(n + 1, val)
    dfs(n + 1, val | nums[n])
  }
  dfs(0, 0)
  return cnt
}
// @lc code=end
var nums = [3, 2, 1, 5]

console.log(countMaxOrSubsets(nums))
