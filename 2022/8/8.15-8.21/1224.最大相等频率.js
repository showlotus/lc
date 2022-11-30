/*
 * @lc app=leetcode.cn id=1224 lang=javascript
 *
 * [1224] 最大相等频率
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function (nums) {
  const count = new Map() // 记录每一个数字的出现次数
  const freq = new Map() // 记录出现次数的频数
  let maxFreq = 0 // 最大出现次数
  let res = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    const v = nums[i]
    if (!count.has(v)) {
      count.set(v, 0)
    }
    if (count.get(v) > 0) {
      freq.set(count.get(v), freq.get(count.get(v)) - 1)
    }
    count.set(v, count.get(v) + 1)
    maxFreq = Math.max(maxFreq, count.get(v))
    if (!freq.has(count.get(v))) {
      freq.set(count.get(v), 0)
    }
    freq.set(count.get(v), freq.get(count.get(v)) + 1)
    if (
      maxFreq === 1 || // 最大出现次数为 1
      (freq.get(maxFreq) * maxFreq + freq.get(maxFreq - 1) * (maxFreq - 1) ===
        i + 1 &&
        freq.get(maxFreq) === 1) || // 最大次数的频数为 1 ，且其余次数的频数为 maxFreq - 1
      (freq.get(maxFreq) * maxFreq + 1 === i + 1 && freq.get(1) === 1) // 只有一个次数的频数为 1，其余次数的频数都为 maxFreq
    ) {
      res = Math.max(res, i + 1)
    }
  }
  return res
}
// @lc code=end
var nums = [2, 2, 1, 1, 5, 3, 3, 5]
nums = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5]

var res = maxEqualFreq(nums)

console.log(res)
