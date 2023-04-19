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
  const edges = new Map()
  const visited = new Array(numCourses).fill(false)
  const stack = []

  for (const [edge, neighbor] of prerequisites) {
    if (edges.has(edge)) {
      edges.get(edge).push(neighbor)
    } else {
      edges.set(edge, [neighbor])
    }
  }

  console.log(edges)

  const dfs = node => {
    visited[node] = true
    for (const neighbor of edges.get(node)) {
      if (!visited[neighbor]) {
        dfs(neighbor)
      }
    }

    stack.push(node)
  }

  for (const [edge] of prerequisites) {

  }

  for (const node of)
}
// @lc code=end
let numCourses = 2,
  prerequisites = [[1, 0]]

const res = canFinish(numCourses, prerequisites)
console.log(res)
