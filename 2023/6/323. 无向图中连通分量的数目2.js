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

  const bfs = i => {
    const stack = [i]
    while (stack.length) {
      const curr = stack.shift()
      if (visited[curr]) {
        continue
      }
      visited[curr] = true
      for (const v of graph[curr]) {
        if (!visited[v]) {
          stack.push(v)
        }
      }
    }
  }

  let res = 0
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      res++
      bfs(i)
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

// n = 5
// edges = [
//   [0, 1],
//   [1, 2],
//   [2, 3],
//   [3, 4]
// ]

const res = countComponents(n, edges)
console.log(res)
