/*
 * @lc app=leetcode.cn id=1819 lang=javascript
 *
 * [1819] 序列中不同最大公约数的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countDifferentSubsequenceGCDs = function (nums) {
  const maxVal = nums.reduce((max, curr) => Math.max(max, curr), 0)
  const existed = new Array(maxVal + 1).fill(false)
  for (const num of nums) {
    existed[num] = true
  }

  let res = 0
  for (let i = 1; i <= maxVal; i++) {
    let subGcd = 0
    for (let j = i; j <= maxVal; j += i) {
      if (existed[j]) {
        if (subGcd === 0) {
          subGcd = j
        } else {
          subGcd = gcd(subGcd, j)
        }
        if (subGcd === i) {
          res++
          break
        }
      }
    }
  }
  return res
}

const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b)
}
// @lc code=end
let nums = [6, 10, 3]

nums = [5, 15, 40, 5, 6]

const res = countDifferentSubsequenceGCDs(nums)
console.log(res)
