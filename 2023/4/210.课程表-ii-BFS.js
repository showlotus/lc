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
  // 邻接表
  const edges = new Array(numCourses).fill(0).map(() => new Array())
  // 入度数组
  const degree = new Array(numCourses).fill(0)
  // 构建邻接表，初始化入度数组
  for (const [e0, e1] of prerequisites) {
    edges[e0].push(e1)
    degree[e1]++
  }

  const res = []
  const stack = []
  // 将度为 0 的节点加入栈中
  degree.forEach((val, idx) => {
    if (val === 0) {
      stack.push(idx)
    }
  })

  while (stack.length) {
    const node = stack.shift()
    res.push(node)
    edges[node].forEach(neighbor => {
      degree[neighbor]--
      // 如果邻接节点度为 0，则入栈
      if (degree[neighbor] === 0) {
        stack.push(neighbor)
      }
    })
  }

  // 只有当结果数组中节点个数等于所有节点总数时，说明没有环
  if (res.length === numCourses) {
    return res.reverse()
  }
  return []
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

// prerequisites = [
//   [0, 1],
//   [1, 2],
//   [2, 3],
//   [3, 0]
// ]

const res = findOrder(numCourses, prerequisites)
console.log(res)
