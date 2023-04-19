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
  const edges = new Array(numCourses).fill(0).map(() => new Array())
  for (const [e0, e1] of prerequisites) {
    edges[e0].push(e1)
  }
  return edges
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
]

const res = findOrder(numCourses, prerequisites)
console.log(res)
