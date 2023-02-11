/*
 * @lc app=leetcode.cn id=2335 lang=javascript
 *
 * [2335] 装满杯子需要的最短总时长
 */

// @lc code=start
/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  const compare = (a, b) => b - a
  amount.sort(compare)
  let res = 0
  while (amount[2] > 0) {
    amount[1]--
    amount[0]--
    amount.sort(compare)
    res++
  }
  return res + amount[0]
}
// @lc code=end
let amount = [1, 4, 2]
amount = [5, 4, 4]
// amount = [5, 0, 0]

const res = fillCups(amount)
console.log(res)
