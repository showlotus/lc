/*
 * @lc app=leetcode.cn id=2028 lang=javascript
 *
 * [2028] 找出缺失的观测数据
 */

// @lc code=start
/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
const sum = (prev, curr) => prev + curr
var missingRolls = function (rolls, mean, n) {
  let m = rolls.length
  let sumM = rolls.reduce(sum, 0)
  let sumTotal = mean * (m + n)
  let sumN = sumTotal - sumM
  if (sumN < n || sumN > n * 6) return []

  let res = []
  while (n > 0) {
    let t = Math.min(Math.ceil(sumN / n), 6)
    res.push(t)
    sumN -= t
    n--
  }
  if (sumN > 0) return []
  return res
}
// @lc code=end

var rolls = [2, 2, 4, 3],
  mean = 4,
  n = 2
;(rolls = [1, 5, 6]), (mean = 3), (n = 4)
;(rolls = [1, 2, 3, 4]), (mean = 6), (n = 4)
;(rolls = [1]), (mean = 3), (n = 1)
console.log(missingRolls(rolls, mean, n))
