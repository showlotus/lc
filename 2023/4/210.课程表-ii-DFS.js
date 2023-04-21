/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // 是否有环
  const edges = new Array(numCourses).fill(0).map(() => new Array())
  for (const [e0, e1] of prerequisites) {
    edges[e1].push(e0)
  }

  let valid = true
  const res = []
  const visited = new Array(numCourses).fill(0)

  const dfs = idx => {
    visited[idx] = 1
    edges[idx].forEach(v => {
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
    visited[idx] = 2
    res.push(idx)
  }

  for (let i = 0; i < numCourses && valid; i++) {
    if (visited[i] === 0) {
      dfs(i)
    }
  }

  // 没有环，返回结果数组，否则返回空数组
  return valid ? res.reverse() : []
}
// @lc code=end
let numCourses = 2,
  prerequisites = [[1, 0]]

numCourses = 4
prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2]
  // [1, 2],
  // [2, 1]
  // [0, 3]
]

prerequisites = [
  [0, 1],
  [1, 2],
  [2, 3]
  // [3, 0]
]

const res = findOrder(numCourses, prerequisites)
console.log(res)
