/*
 * @lc app=leetcode.cn id=1414 lang=javascript
 *
 * [1414] 和为 K 的最少斐波那契数字数目
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
  let fibList = [1, 1, 2]
  let f1 = 1
  let f2 = 1
  let fn = f1 + f2
  while (fn <= k) {
    fibList.push(fn)
    ;[f1, f2, fn] = [f2, fn, f2 + fn]
  }
  let cnt = 0
  let sum = 0
  for (let i = fibList.length - 1; i >= 0; i--) {
    if (sum < k && sum + fibList[i] <= k) {
      sum += fibList[i]
      cnt++
    }
  }
  return cnt
}
// @lc code=end

var k = 7
k = 10
// k = 21
console.log(findMinFibonacciNumbers(k))
