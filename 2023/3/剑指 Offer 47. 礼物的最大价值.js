// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  /**
   * 动态规划
   * dp[i][j] 表示从 [0, 0] 处到达 [i - 1, j - 1] 格子处，能拿到的最大礼物价值
   * 由于移动方向只能为向下或者向右，所以需要对当前格子的左边格子 dp[i][j - 1] 和上边格子 dp[i - 1][j] 两者中取最大值
   * 即动态转移方程为 dp[i][j] = Max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1]
   */
  const m = grid.length
  const n = grid[0].length
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]) + grid[i][j]
    }
  }
  return dp[m][n]
}
// @lc code=end

let grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]

const res = maxValue(grid)

console.log(res)
