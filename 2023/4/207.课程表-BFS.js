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
  const inDegrees = new Array(numCourses).fill(0)
  for (const [e0, e1] of prerequisites) {
    edges[e0].push(e1)
    inDegrees[e1]++
  }

  const res = []
  const stack = []
  inDegrees.forEach((degree, idx) => {
    if (degree === 0) {
      stack.push(idx)
    }
  })

  while (stack.length) {
    const node = stack.shift()
    res.push(node)
    edges[node].forEach(neighborNode => {
      inDegrees[neighborNode]--
      if (inDegrees[neighborNode] === 0) {
        stack.push(neighborNode)
      }
    })
  }

  return res.length === numCourses
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
