/*
 * @lc app=leetcode.cn id=1798 lang=javascript
 *
 * [1798] 你能构造出连续值的最大数目
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function (coins) {
  let res = 0
  coins.sort((a, b) => a - b)
  for (const coin of coins) {
    if (coin <= res + 1) {
      res += coin
    } else {
      break
    }
  }
  return res + 1
}
// @lc code=end
let coins = [1, 3]
coins = [1, 1, 1, 4]
coins = [1, 4, 10, 3, 1]
coins = []

const res = getMaximumConsecutive(coins)
console.log(res)
