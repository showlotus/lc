/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = new Set()
  while (n !== 1) {
    if (map.has(n)) {
      return false
    }
    map.add(n)
    n = calc(n)
  }
  return true
}

const calc = n => {
  let sum = 0
  while (n > 0) {
    sum += (n % 10) ** 2
    n = Math.floor(n / 10)
  }
  return sum
}
// @lc code=end

let n = 19
n = 2
n = 10000

const res = isHappy(n)
console.log(res)
