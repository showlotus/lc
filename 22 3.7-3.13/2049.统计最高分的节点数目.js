/*
 * @lc app=leetcode.cn id=2049 lang=javascript
 *
 * [2049] 统计最高分的节点数目
 */

// @lc code=start
/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function (parents) {
  let n = parents.length
  let children = new Array(n).fill(0).map(() => new Array())

  for (let [i, v = parents[i]] in parents) {
    if (v !== -1) {
      children[v].push(+i)
    }
  }

  let maxScore = 0
  let cnt = 0

  const dfs = node => {
    let score = 1
    let size = n - 1
    for (let child of children[node]) {
      let t = dfs(child)
      score *= t
      size -= t
    }

    if (node !== 0) {
      score *= size
    }

    if (score === maxScore) {
      cnt++
    } else if (score > maxScore) {
      maxScore = score
      cnt = 1
    }
    return n - size
  }

  dfs(0)
  return cnt
}
// @lc code=end
var parents = [-1, 2, 0, 2, 0]

console.log(countHighestScoreNodes(parents))
