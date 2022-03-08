/*
 * @lc app=leetcode.cn id=2055 lang=javascript
 *
 * [2055] 蜡烛之间的盘子
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
  let slen = s.length
  let leftCandles = new Array(slen)
  let rightCandles = new Array(slen)
  let stackLeft = []
  let stackRight = []
  for (let i = 0; i < slen; i++) {
    while (stackLeft.length && s[stackLeft[stackLeft.length - 1]] === "*") {
      stackLeft.pop()
    }
    leftCandles[i] = stackLeft.length ? stackLeft[stackLeft.length - 1] : -1
    stackLeft.push(i)

    while (stackRight.length && s[stackRight[stackRight.length - 1]] === "*") {
      stackRight.pop()
    }
    rightCandles[slen - i - 1] = stackRight.length ? stackRight[stackRight.length - 1] : slen
    stackRight.push(slen - i - 1)
  }

  let res = []
  queries.forEach(([start, end]) => {
    let cnt = 0
    for (let i = start + 1; i <= end; i++) {
      if (s[i] === "*" && leftCandles[i] >= start && rightCandles[i] <= end) {
        cnt++
      }
    }
    res.push(cnt)
  })

  return res
}
// @lc code=end
var s = "**|**|***|",
  queries = [
    [2, 5],
    [5, 9],
  ]
;(s = "***|**|*****|**||**|*"),
  (queries = [
    [1, 17],
    [4, 5],
    [14, 17],
    [5, 11],
    [15, 16],
  ])
;(s = "*|*"), (queries = [[0, 1]])

console.log(platesBetweenCandles(s, queries))
