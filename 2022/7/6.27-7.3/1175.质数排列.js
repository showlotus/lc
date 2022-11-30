/*
 * @lc app=leetcode.cn id=1175 lang=javascript
 *
 * [1175] 质数排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
  const MOD = 10 ** 9 + 7
  let primeCounts = primeNums(n)
  let nonPrimeCounts = n - primeCounts
  let res = 1
  while (primeCounts > 0) {
    res = res % MOD
    res *= primeCounts
    primeCounts--
  }

  while (nonPrimeCounts > 0) {
    res = res % MOD
    res *= nonPrimeCounts
    nonPrimeCounts--
  }

  return res
}

function primeNums(n) {
  let cnt = 0
  for (let i = 2; i <= n; ++i) {
    cnt += isPrime(i) ? 1 : 0
  }
  return cnt
}

function isPrime(n) {
  if (n <= 1) return false
  for (let i = 2; i * i <= n; ++i) {
    if (n % i === 0) return false
  }
  return true
}
// @lc code=end

var n = 5
n = 90
n = 100
var res = numPrimeArrangements(n)

console.log(res)
