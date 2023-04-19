/*
 * @lc app=leetcode.cn id=1129 lang=javascript
 *
 * [1129] 颜色交替的最短路径
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  // prettier-ignore
  const next = new Array(2).fill(0).map(() => new Array(n).fill(0).map(() => new Array()))

  for (const edge of redEdges) {
    next[0][edge[0]].push(edge[1])
  }
  for (const edge of blueEdges) {
    next[1][edge[0]].push(edge[1])
  }

  // prettier-ignore
  const dist = new Array(2).fill(0).map(() => new Array(n).fill(Number.MAX_VALUE))
  const queue = []
  dist[0][0] = 0
  dist[1][0] = 0
  queue.push([0, 0])
  queue.push([0, 1])
  while (queue.length) {
    const [x, t] = queue.shift()
    for (const y of next[1 - t][x]) {
      if (dist[1 - t][y] !== Number.MAX_VALUE) {
        continue
      }
      dist[1 - t][y] = dist[t][x] + 1
      queue.push([y, 1 - t])
    }
  }
  const res = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    res[i] = Math.min(dist[0][i], dist[1][i])
    if (res[i] === Number.MAX_VALUE) {
      res[i] = -1
    }
  }
  return res
}
// @lc code=end
let n = 3
let red_edges = [
  [0, 1],
  [1, 2]
]
let blue_edges = []

const res = shortestAlternatingPaths(n, red_edges, blue_edges)
console.log(res)
