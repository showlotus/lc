/*
 * @lc app=leetcode.cn id=1971 lang=javascript
 *
 * [1971] 寻找图中是否存在路径
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const uf = new Array(n).fill(0).map((_, i) => i)
  for (let i = 0; i < edges.length; i++) {
    union(uf, edges[i][0], edges[i][1])
  }
  return find(uf, source) === find(uf, destination)
}

const union = (uf, x, y) => {
  x = find(uf, x)
  y = find(uf, y)
  uf[y] = x
}

const find = (uf, x) => {
  if (uf[x] === x) {
    return x
  }
  return (uf[x] = find(uf, uf[x]))
}

// @lc code=end
let n = 3
let edges = [
  [0, 1],
  [1, 2],
  [2, 0]
]
let source = 0
let destination = 2

// n = 6
// edges = [
//   [0, 1],
//   [0, 2],
//   [3, 5],
//   [5, 4],
//   [4, 3]
// ]
// source = 0
// destination = 5

const res = validPath(n, edges, source, destination)
console.log(res)
