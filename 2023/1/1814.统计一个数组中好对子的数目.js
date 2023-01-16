/*
 * @lc app=leetcode.cn id=1814 lang=javascript
 *
 * [1814] 统计一个数组中好对子的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  const MOD = 10 ** 9 + 7
  const map = new Map()
  let res = 0
  for (const num of nums) {
    const f = fn(num)
    if (!map.has(f)) {
      map.set(f, 1)
    } else {
      res = (res + map.get(f)) % MOD
      map.set(f, map.get(f) + 1)
    }
  }
  return res
}

const fn = n => {
  let revNum = 0
  let n1 = n
  while (n1 > 0) {
    revNum = revNum * 10 + (n1 % 10)
    n1 = Math.floor(n1 / 10)
  }
  return n - revNum
}
// @lc code=end
let nums = [42, 11, 1, 97]
nums = [13, 10, 35, 24, 76]

const res = countNicePairs(nums)
console.log(res)

console.log(1599960000 % (10 ** 9 + 7))
