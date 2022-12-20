/*
 * @lc app=leetcode.cn id=1760 lang=javascript
 *
 * [1760] 袋子里最少数目的球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  let left = 1
  let right = 0
  for (const n of nums) {
    right = Math.max(right, n)
  }
  let res = 0
  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    let opts = 0
    for (const n of nums) {
      opts += Math.floor((n - 1) / mid)
    }
    // 总操作数大于最大操作数，说明分的粒度太细
    // mid 太小，需要扩大，并调整下边界
    if (opts > maxOperations) {
      left = mid + 1
    } else {
      // 总操作数小于等于最大操作数，已满足条件
      // 记录当前 mid，同时调整上边界
      // 尝试是否能找到下一个 mid 比当前 mid 更小
      res = mid
      right = mid - 1
    }
  }
  return res
}
// @lc code=end
let nums = [7, 17]
let maxOperations = 2

nums = [2, 4, 8, 2]
maxOperations = 4

nums = [9]
maxOperations = 2

nums = [9]
maxOperations = 4

const res = minimumSize(nums, maxOperations)
console.log(res)
