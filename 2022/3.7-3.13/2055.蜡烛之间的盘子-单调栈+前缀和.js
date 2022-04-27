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
  let stackLeft = []
  let stackRight = []
  for (let i = 0, j = slen - i - 1; i < slen; i++, j--) {
    prefixPlatesSum[i + 1] = prefixPlatesSum[i] + (s[i] === "*" ? 1 : 0)

    while (stackLeft.length && s[stackLeft[stackLeft.length - 1]] === "*") {
      stackLeft.pop()
    }
    if (s[i] === "|") {
      leftCandles[i] = i
    } else {
      leftCandles[i] = stackLeft.length ? stackLeft[stackLeft.length - 1] : -1
    }
    stackLeft.push(i)

    while (stackRight.length && s[stackRight[stackRight.length - 1]] === "*") {
      stackRight.pop()
    }
    if (s[j] === "|") {
      rightCandles[j] = j
    } else {
      rightCandles[j] = stackRight.length ? stackRight[stackRight.length - 1] : -1
    }
    stackRight.push(j)
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
;(s = "*|*"), (queries = [[0, 1]])
;(s = "||*"), (queries = [[2, 2]])

console.log(platesBetweenCandles(s, queries))
