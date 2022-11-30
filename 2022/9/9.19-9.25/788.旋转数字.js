/*
 * @lc app=leetcode.cn id=788 lang=javascript
 *
 * [788] 旋转数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
  let res = 0
  for (let i = 1; i <= n; i++) {
    if (isGoodNum(i)) {
      res++
    }
  }
  return res
}

function isGoodNum(n) {
  const b = [0, 1, 8]
  const s = [2, 5, 6, 9]
  let isUseful = false
  while (n > 0) {
    if (s.includes(n % 10)) {
      isUseful = true
    } else if (!b.includes(n % 10)) {
      isUseful = false
      break
    }
    n = Math.floor(n / 10)
  }
  return isUseful
}
// @lc code=end
console.log(rotatedDigits(10))
console.log(isGoodNum(322))
console.log(isGoodNum(240))
console.log(isGoodNum(250))
