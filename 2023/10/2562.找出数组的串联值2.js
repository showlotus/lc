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
  // 用双指针优化，不对数组进行额外操作
  let i = 0
  let j = nums.length - 1
  while (i <= j) {
    // 当前未处理的数字不止一个
    if (i !== j) {
      // 1. 使用字符串拼接，需要额外的内存空间
      // const newNum = Number(`${nums[i]}${nums[j]}`)
      // 2. 对数字操作，尾部数字每减去一位（除以10），头部数字加一位（乘以10）
      let first = nums[i]
      let last = nums[j]
      while (last > 0) {
        first *= 10
        last = Math.floor(last / 10)
      }
      res += first + nums[j]
    } else {
      // 只剩一个数字未处理
      res += nums[i]
    }
    ++i
    --j
  }
  return res
}
// @lc code=end
let nums = [7, 52, 2, 4]
nums = [5, 14, 13, 8, 12]
// nums = [2]
// nums = [2, 8]

const res = findTheArrayConcVal(nums)
console.log(res)
