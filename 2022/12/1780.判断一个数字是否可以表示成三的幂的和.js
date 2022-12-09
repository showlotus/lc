/*
 * @lc app=leetcode.cn id=1780 lang=javascript
 *
 * [1780] 判断一个数字是否可以表示成三的幂的和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  // 类似于二进制，任何一个整数用二进制表示，都为一个由 0 和 1 组成的字符串
  // 而本题，三的幂的和，也即，将一个数转为三进制后，也是由 0 和 1 组成的字符串
  // 进制转换可以用辗转取余法，每次对余数进行判断，如果为 2 即为 false
  while (n > 0) {
    if (n % 3 === 2) {
      return false
    }
    n = Math.floor(n / 3)
  }
  return true
}
// @lc code=end
let n = 12
n = 91
n = 21
const res = checkPowersOfThree(n)
console.log(res)
