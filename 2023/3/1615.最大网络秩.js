/*
 * @lc app=leetcode.cn id=1615 lang=javascript
 *
 * [1615] 最大网络秩
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  let res = 0
  const map = new Map()
  for (let i = 0; i < n; i++) {
    map.set(i, new Set())
  }
  for (const [r1, r2] of roads) {
    map.get(r1).add(r2)
    map.get(r2).add(r1)
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      res = Math.max(
        res,
        map.get(i).size + map.get(j).size + (map.get(i).has(j) ? -1 : 0)
      )
    }
  }
  return res
}
// @lc code=end
let n = 4
let roads = [
  [0, 1],
  [0, 3],
  [1, 2],
  [1, 3]
]

;(n = 5),
  (roads = [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4]
  ])
;(n = 8),
  (roads = [
    [0, 1],
    [1, 2],
    [2, 3],
    [2, 4],
    [5, 6],
    [5, 7]
  ])

n = 2
roads = []

const res = maximalNetworkRank(n, roads)
console.log(res)
