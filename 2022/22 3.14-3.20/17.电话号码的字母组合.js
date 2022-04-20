/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const phone = [
    ["a", "b", "c"], // 2
    ["d", "e", "f"], // 3
    ["g", "h", "i"], // 4
    ["j", "k", "l"], // 5
    ["m", "n", "o"], // 6
    ["p", "q", "r", "s"], // 7
    ["t", "u", "v"], // 8
    ["w", "x", "y", "z"], // 9
  ]
  if (digits.length === 0) return []
  let nums = []
  for (let n of digits) {
    nums.push(phone[+n - 2])
  }
  let res = nums.reduce((prev, curr) => {
    return prev.map(v => curr.map(b => v + b)).flat()
  })
  return res
}
// @lc code=end
var digits = "234"
digits = ""

console.log(letterCombinations(digits))
