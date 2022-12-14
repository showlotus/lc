/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length
  const uf = new Array(n).fill(0).map((_, i) => i)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] === 1) {
        union(uf, i, j)
      }
    }
  }
  let res = 0
  for (let i = 0; i < n; i++) {
    if (uf[i] === i) {
      res++
    }
  }
  return res
}

// 合并
const union = (uf, x, y) => {
  x = find(uf, x)
  y = find(uf, y)
  uf[y] = x
}

// 查询
const find = (uf, x) => {
  if (uf[x] === x) {
    return x
  }
  return (uf[x] = find(uf, uf[x]))
}
// @lc code=end
let isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
]

isConnected = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]

isConnected = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1]
]

const res = findCircleNum(isConnected)
console.log(res)
