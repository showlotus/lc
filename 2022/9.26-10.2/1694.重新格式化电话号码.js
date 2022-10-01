/*
 * @lc app=leetcode.cn id=1694 lang=javascript
 *
 * [1694] 重新格式化电话号码
 */

// @lc code=start
/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  number = number.replace(/[\s-]/g, "")
  const n = number.length
  if (n < 4) {
    return number
  } else if (n % 3 === 1) {
    return number.replace(/(\d{2})$/, "-$1").replace(/(?<=^(\d{3})+)/g, "-")
  } else {
    return number.replace(/(?<=^(\d{3})+)(?!$)/g, "-")
  }
}
// @lc code=end
let number = "1-23"

let res = reformatNumber(number)
console.log(res)
console.log(reformatNumber("1-23-45 6"))
console.log(reformatNumber("123 4-567"))
console.log(reformatNumber("12"))
console.log(reformatNumber("--17-5 229 35-39475 "))
console.log(
  "1234".replace(/(\d{2})$/, "-$1").replace(/(?<=^(\d{3})+)(?!$)/g, "-")
)
