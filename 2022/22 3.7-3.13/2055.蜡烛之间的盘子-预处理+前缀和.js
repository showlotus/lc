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
  let prefixPlatesSum = new Array(slen + 1)
  prefixPlatesSum[0] = 0
  let leftCandles = new Array(slen)
  let rightCandles = new Array(slen)
  for (let i = 0, j = slen - i - 1, l = -1, r = -1; i < slen; i++, j--) {
    prefixPlatesSum[i + 1] = prefixPlatesSum[i] + (s[i] === "*" ? 1 : 0)

    if (s[i] === "|") {
      l = i
    }
    leftCandles[i] = l

    if (s[j] === "|") {
      r = j
    }
    rightCandles[j] = r
  }

  let res = []
  queries.forEach(([start, end]) => {
    let left = leftCandles[end]
    let right = rightCandles[start]
    if (left !== -1 && right !== -1 && left - right > 0) {
      let cnt = prefixPlatesSum[left] - prefixPlatesSum[right]
      res.push(cnt)
    } else {
      res.push(0)
    }
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
// ;(s = "*|*"), (queries = [[0, 1]])
// ;(s = "||*"), (queries = [[2, 2]])

console.log(platesBetweenCandles(s, queries))
