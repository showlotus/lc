/*
 * @lc app=leetcode.cn id=807 lang=javascript
 *
 * [807] 保持城市天际线
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let rowMaxList = new Array(grid.length).fill(0)
  let colMaxList = new Array(grid[0].length).fill(0)
  let i = 0
  for (let row of grid) {
    rowMaxList[i++] = Math.max(...row)
  }
  for (let rowLen = grid.length, col = 0; col < grid[0].length; col++) {
    for (let j = 0; j < rowLen; j++) {
      colMaxList[col] = Math.max(colMaxList[col], grid[j][col])
    }
  }
  let maxSum = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      maxSum += Math.min(rowMaxList[i], colMaxList[j]) - grid[i][j]
    }
  }
  return maxSum
};
// @lc code=end


let grid = [
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0]
]

grid = [
  [1]
]

console.log(maxIncreaseKeepingSkyline(grid))
