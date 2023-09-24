/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 == "0") {
    return "0"
  }

  const n1 = num1.length
  const n2 = num2.length
  const res = new Array(n1 + n2).fill(0)
  for (let i = n1 - 1; i >= 0; i--) {
    for (let j = n2 - 1; j >= 0; j--) {
      const k = Number(num1[i]) * Number(num2[j])
      let m = i + j + 1
      res[m] += k
      while (res[m] >= 10) {
        res[m - 1] += Math.floor(res[m] / 10)
        res[m] = res[m] % 10
        m--
      }
    }
  }
  // 移除前导 0
  while (res[0] === 0) {
    res.shift()
  }
  return res.join("")
}
// @lc code=end

let num1 = "123"
let num2 = "456"
// num2 = "20"
const res = multiply(num1, num2)
console.log(res)
