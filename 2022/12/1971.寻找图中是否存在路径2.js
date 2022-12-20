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
  // BFS
  const arrives = new Array(n).fill(0).map(() => new Array())
  for (const [x, y] of edges) {
    arrives[x].push(y)
    arrives[y].push(x)
  }

  const visited = new Array(n).fill(false)
  const stack = [source]
  visited[source] = true
  while (stack.length) {
    const edge = stack.shift()
    if (edge === destination) {
      return true
    }

    for (const next of arrives[edge]) {
      if (!visited[next]) {
        stack.push(next)
        visited[next] = true
      }
    }
  }
  return visited[destination]
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
