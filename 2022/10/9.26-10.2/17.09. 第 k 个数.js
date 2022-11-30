/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  const dp = new Array(k + 1).fill(1)
  let p3 = 1
  let p5 = 1
  let p7 = 1
  for (let i = 2; i <= k; i++) {
    const [num3, num5, num7] = [dp[p3] * 3, dp[p5] * 5, dp[p7] * 7]
    dp[i] = Math.min(num3, num5, num7)
    if (num3 === dp[i]) {
      p3++
    }
    if (num5 === dp[i]) {
      p5++
    }
    if (num7 === dp[i]) {
      p7++
    }
  }
  return dp[k]
}
let k = 5
k = 5
let res = getKthMagicNumber(k)
console.log(res)
