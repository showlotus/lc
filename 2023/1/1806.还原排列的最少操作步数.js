/*
 * @lc app=leetcode.cn id=1806 lang=javascript
 *
 * [1806] 还原排列的最少操作步数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
  let perm = new Array(n).fill(0).map((_, i) => i)
  let res = 0
  while (true) {
    const arr = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        arr[i] = perm[i / 2]
      } else {
        arr[i] = perm[n / 2 + (i - 1) / 2]
      }
    }
    perm = arr
    res++

    for (let i = 0; i < n; i++) {
      if (arr[i] !== i) {
        break
      } else if (i === n - 1) {
        return res
      }
    }
  }
}
// @lc code=end
let n = 2
n = 4
n = 6
const res = reinitializePermutation(n)
console.log(res)
