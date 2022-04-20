/*
 * @lc app=leetcode.cn id=2100 lang=javascript
 *
 * [2100] 适合打劫银行的日子
 */

// @lc code=start
/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
  let days = security.length
  if (days < time * 2 + 1) return []
  if (time === 0) return new Array(days).fill(0).map((_, i) => i)
  let left = new Array(days).fill(0)
  let right = new Array(days).fill(0)

  for (let i = 1; i < days; i++) {
    if (security[i] <= security[i - 1]) {
      left[i] = left[i - 1] + 1
    }

    if (security[days - i - 1] <= security[days - i]) {
      right[days - i - 1] = right[days - i] + 1
    }
  }

  let res = []
  for (let i in security) {
    if (left[i] >= time && right[i] >= time) {
      res.push(+i)
    }
  }

  return res
}
// @lc code=end
var security = [5, 3, 3, 3, 5, 6, 2],
  time = 2
;(security = [1, 1, 1, 1, 1]), (time = 0)
;(security = [1, 2, 3, 3, 3, 4, 5, 6]), (time = 2)
;(security = [1, 2, 5, 4, 1, 0, 2, 4, 5, 3, 1, 2, 4, 3, 2, 4, 8]), (time = 2)
;(security = [5, 3, 3, 3, 5, 6, 2]), (time = 2)
;(security = [1]), (time = 5)
console.log(goodDaysToRobBank(security, time))
