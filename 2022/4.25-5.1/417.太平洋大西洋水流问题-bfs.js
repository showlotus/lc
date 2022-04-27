/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  let m = heights.length;
  let n = heights[0].length;
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  let arrivePacific = new Array(m).fill(0).map(() => new Array(n).fill(false));
  let arriveAtlantic = new Array(m).fill(0).map(() => new Array(n).fill(false));

  const bfs = (x, y, ocean) => {
    if (ocean[x][y]) return;

    ocean[x][y] = true;
    let list = [[x, y]];
    while (list.length) {
      let [currX, currY] = list.shift();
      for (let dir of dirs) {
        const [nextX, nextY] = [currX + dir[0], currY + dir[1]];
        if (
          nextX >= 0 &&
          nextX < m &&
          nextY >= 0 &&
          nextY < n &&
          !ocean[nextX][nextY] &&
          heights[nextX][nextY] >= heights[currX][currY]
        ) {
          ocean[nextX][nextY] = true;
          list.push([nextX, nextY]);
        }
      }
    }
  };

  // 岛屿上边界
  for (let i = 0; i < n; i++) {
    bfs(0, i, arrivePacific);
  }

  // 岛屿左边界
  for (let i = 0; i < m; i++) {
    bfs(i, 0, arrivePacific);
  }

  // 岛屿右边界
  for (let i = 0; i < m; i++) {
    bfs(i, n - 1, arriveAtlantic);
  }

  // 岛屿下边界
  for (let i = 0; i < n; i++) {
    bfs(m - 1, i, arriveAtlantic);
  }

  let res = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arrivePacific[i][j] && arriveAtlantic[i][j]) {
        res.push([i, j]);
      }
    }
  }

  return res;
};
// @lc code=end

var heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

// heights = [[1, 2]];
// heights = [[12], [1]];

// heights = [
//   [2, 1],
//   [1, 2],
// ];

heights = [
  [1, 2],
  [4, 3],
];

console.log(pacificAtlantic(heights));
