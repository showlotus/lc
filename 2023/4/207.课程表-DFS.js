/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const edges = new Array(numCourses).fill(0).map(() => new Array())
  for (const [next, prev] of prerequisites) {
    edges[prev].push(next)
  }

  let valid = true
  const res = []
  const visited = new Array(numCourses).fill(0)
  const dfs = node => {
    visited[node] = 1
    edges[node].forEach(v => {
      if (visited[v] === 0) {
        dfs(v)
        if (!valid) {
          return
        }
      } else if (visited[v] === 1) {
        valid = false
        return
      }
    })
    visited[node] = 2
    res.unshift(node)
  }

  for (let i = 0; i < numCourses && valid; i++) {
    if (visited[i] === 0) {
      dfs(i)
    }
  }

  return valid
}
// @lc code=end
let numCourses = 2,
  prerequisites = [[1, 0]]

numCourses = 2
prerequisites = [
  [1, 0],
  [0, 1]
]

const res = canFinish(numCourses, prerequisites)
console.log(res)
