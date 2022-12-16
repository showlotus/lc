/*
 * @lc app=leetcode.cn id=1785 lang=javascript
 *
 * [1785] 构成特定和需要添加的最少元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
  // 贪心：
  // 先对 nums 求和得到 sum，计算差值 diff = Math.abs(goal - sum)
  // 要想添加的元素最少，结果 res = Math.ceil(diff / limit)
  for (const n of nums) {
    goal -= n
  }
  return Math.ceil(Math.abs(goal) / limit)
}
// @lc code=end
let nums = [1, -1, 1]
let limit = 3
let goal = -4

nums = [1, -10, 9, 1]
limit = 100
goal = 0

nums = [1000]
limit = 100
goal = 100

const res = minElements(nums, limit, goal)
console.log(res)
