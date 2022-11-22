/*
 * @lc app=leetcode.cn id=878 lang=javascript
 *
 * [878] 第 N 个神奇数字
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
  const MOD = 10 ** 9 + 7
  let l = Math.min(a, b)
  let r = n * Math.min(a, b)
  const c = lcm(a, b)
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    const cnt = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / c)
    if (cnt >= n) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return (r + 1) % MOD
}

// 最小公倍数
const lcm = (a, b) => {
  return (a * b) / gcd(a, b)
}

// 最大公约数
const gcd = (a, b) => {
  return b !== 0 ? gcd(b, a % b) : a
}
// @lc code=end
let n = 1
let a = 2
let b = 3

n = 4
a = 2
b = 3

let res = nthMagicalNumber(n, a, b)
console.log(res)
