/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let res = []
  let i = num1.length - 1
  let j = num2.length - 1
  let one = 0
  while (i >= 0 || j >= 0) {
    const sum = Number(num1.charAt(i)) + Number(num2.charAt(j))
    res.push((sum + one) % 10)
    one = Math.floor((sum + one) / 10)
    --i
    --j
  }
  if (one > 0) {
    res.push(one)
  }
  return res.reverse().join("")
}
// @lc code=end
let num1 = "11"
let num2 = "123"

// num1 = "456"
// num2 = "77"

num1 = "0"
num2 = "0"

num1 = "1000000000000000"
num2 = "1999999999999990"

// num1 = "5"
// num2 = "9"

const res = addStrings(num1, num2)
console.log(res)
