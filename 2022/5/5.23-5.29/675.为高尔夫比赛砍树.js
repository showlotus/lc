/*
 * @lc app=leetcode.cn id=675 lang=javascript
 *
 * [675] 为高尔夫比赛砍树
 */

// @lc code=start
/**
 * @param {number[][]} forest
 * @return {number}
 */
const dirs = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];
var cutOffTree = function (forest) {
  let tree = [];
  forest.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col > 1) {
        tree.push([i, j]);
      }
    });
  });

  tree.sort((a, b) => forest[a[0]][a[1]] - forest[b[0]][b[1]]);

  let cx = 0;
  let cy = 0;
  let res = 0;
  for (let i = 0, len = tree.length; i < len; i++) {
    const [x, y] = tree[i];
    let steps = bfs(forest, cx, cy, x, y);
    if (steps === -1) {
      return -1;
    }

    cx = x;
    cy = y;
    res += steps;
  }

  return res;
};

function bfs(forest, sx, sy, tx, ty) {
  if (sx === tx && sy === ty) return 0;
  const row = forest.length;
  const col = forest[0].length;
  let steps = 0;
  const queue = [];
  const visited = new Array(row).fill(0).map(() => new Array(col).fill(false));
  queue.push([sx, sy]);
  visited[sx][sy] = true;
  while (queue.length) {
    steps++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [cx, cy] = queue.shift();
      for (let j = 0; j < 4; j++) {
        const nx = cx + dirs[j][0];
        const ny = cy + dirs[j][1];
        if (
          nx >= 0 &&
          nx < row &&
          ny >= 0 &&
          ny < col &&
          !visited[nx][ny] &&
          forest[nx][ny] > 0
        ) {
          if (nx === tx && ny === ty) {
            return steps;
          }
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
  return -1;
}
// @lc code=end

var forest = [
  [1, 2, 3],
  [0, 0, 4],
  [7, 6, 5],
];
forest = [
  [1, 2, 3],
  [0, 0, 0],
  [7, 6, 5],
];
forest = [
  [2, 3, 4],
  [0, 0, 5],
  [8, 7, 6],
];
var res = cutOffTree(forest);

console.log(res);
