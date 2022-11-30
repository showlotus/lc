/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  let dp = new Array(3).fill(0)
  for (let i = 0; i < 3; ++i) {
    dp[i] = costs[0][i]
  }

  const n = costs.length
  for (let i = 1; i < n; ++i) {
    const newDp = new Array(3).fill(0)
    for (let j = 0; j < 3; ++j) {
      newDp[j] = Math.min(dp[(j + 1) % 3], dp[(j + 2) % 3]) + costs[i][j]
    }
    dp = newDp
  }

  return Math.min(...dp)
}

let costs = [
  [17, 2, 17],
  [16, 16, 5],
  [14, 3, 19]
]

let res = minCost(costs)

console.log(res)
