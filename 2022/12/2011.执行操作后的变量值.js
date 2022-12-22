/*
 * @lc app=leetcode.cn id=2011 lang=javascript
 *
 * [2011] 执行操作后的变量值
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let res = 0
  operations.forEach(opt => {
    if (opt.startsWith("+") || opt.endsWith("+")) {
      res++
    } else {
      res--
    }
  })
  return res
}
// @lc code=end
let operations = ["--X", "X++", "X++"]
operations = ["++X", "++X", "X++"]
operations = ["X++", "++X", "--X", "X--"]

const res = finalValueAfterOperations(operations)
console.log(res)
