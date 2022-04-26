/*
 * @lc app=leetcode.cn id=883 lang=javascript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let xArea = 0;
  let yArea = 0;
  let zArea = 0;

  let n = grid.length;
  grid.forEach(row => {
    xArea += Math.max(...row);
  });

  for (let i = 0; i < n; i++) {
    let colMax = 0;
    for (let j = 0; j < n; j++) {
      if (grid[j][i] !== 0) {
        zArea++;
      }
      colMax = Math.max(colMax, grid[j][i]);
    }
    yArea += colMax;
  }

  return xArea + yArea + zArea;
};
// @lc code=end

let grid = [
  [1, 2],
  [3, 4],
];

grid = [[4]];
grid = [
  [1, 0],
  [0, 2],
];
console.log(projectionArea(grid));
