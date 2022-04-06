/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let a = n
  return a > 0 ? quickMul2(x, n) : 1.0 / quickMul2(x, -a)
};

/**
 * 递归
 * @param {number} x 
 * @param {number} n 
 * @returns {number}
 */
function quickMul(x, n) {
  if (n === 0) return 1.0
  let y = quickMul(x, Math.floor(n / 2))
  return n % 2 === 0 ? y * y : y * y * x
}

/**
 * 迭代+快速幂
 * @param {number} x 
 * @param {number} n 
 */
function quickMul2(x, n) {
  let res = 1
  let base = x
  while (n > 0) {
    if (n % 2 === 1) {
      res *= base
    }
    base *= base
    n = Math.floor(n / 2)
  }
  return res
}


// @lc code=end

let x = 2.00000,
  n = 10
x = 2.10000, n = 3
x = 2.00000, n = -2
x = 2.00000, n = 17
console.log(myPow(x, n))
