/*
 * @lc app=leetcode.cn id=1664 lang=javascript
 *
 * [1664] 生成平衡数组的方案数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
  const n = nums.length
  // 这里的奇偶索引，是对于原数组而言的
  // 索引 i 前，奇索引的元素之和
  let preOdd = 0
  // 索引 i 前，偶索引的元素之和
  let preEven = 0
  // 索引 i 后，奇索引的元素之和
  let sufOdd = 0
  // 索引 i 后，偶索引的元素之和
  let sufEven = 0

  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) {
      sufEven += nums[i]
    } else {
      sufOdd += nums[i]
    }
  }

  let res = 0
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      // i 是偶索引，此时两边：
      // 奇索引之和 oddSum = preOdd + sufEven
      // 偶索引之和 evenSum = preEven + sufOdd
      if (preOdd + sufEven === preEven + sufOdd) {
        res++
      }
      preEven += nums[i]
      sufOdd -= i + 1 === n ? 0 : nums[i + 1]
    } else {
      // i 是奇索引，此时两边：
      // 奇索引之和 oddSum = preOdd + sufOdd
      // 偶索引之和 evenSum = preEven + sufEven
      if (preOdd + sufEven === preEven + sufOdd) {
        res++
      }
      preOdd += nums[i]
      sufEven -= i + 1 === n ? 0 : nums[i + 1]
    }
  }
  return res
}
// @lc code=end

let nums = [2, 1, 6, 4]

nums = [1, 1, 1]
nums = [1, 2, 3]

const res = waysToMakeFair(nums)
console.log(res)
