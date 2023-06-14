/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const visited = new Array(n).fill(false)
  const graph = new Array(n).fill(0).map(() => new Array())
  for (const [i, j] of edges) {
    graph[i].push(j)
    graph[j].push(i)
  }

  const dfs = i => {
    if (visited[i]) {
      return
    }
    visited[i] = true
    for (const v of graph[i]) {
      if (!visited[v]) {
        dfs(v)
      }
    }
  }

  let res = 0
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i)
      res++
    }
  }
  return res
}

let n = 5
let edges = [
  [0, 1],
  [1, 2],
  [3, 4]
]

n = 5
edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4]
]

const res = countComponents(n, edges)
console.log(res)
