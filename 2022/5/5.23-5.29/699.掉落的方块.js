/*
 * @lc app=leetcode.cn id=699 lang=javascript
 *
 * [699] 掉落的方块
 */

// @lc code=start
/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function (positions) {
  let heights = [];
  positions.forEach(([i_left, side], i) => {
    const i_right = i_left + side - 1;
    let height = side;
    for (let j = 0; j < i; j++) {
      const j_left = positions[j][0];
      const j_right = j_left + positions[j][1] - 1;
      if (i_left <= j_right && j_left <= i_right) {
        // 若有重叠部分，更新高度
        height = Math.max(height, heights[j] + side);
      }
    }

    heights.push(height);
  });

  // 遍历结束后，将无重叠的方块落下的最大高度，更新为上一个方块落下时的最大高度
  for (let i = 1, len = heights.length; i < len; i++) {
    heights[i] = Math.max(heights[i - 1], heights[i]);
  }
  return heights;
};
// @lc code=end
var positions = [
  [1, 2],
  [2, 3],
  [6, 1],
];

// positions = [
//   [100, 100],
//   [200, 100],
// ];

// positions = [
//   [6, 1],
//   [9, 2],
//   [2, 4],
// ];

positions = [
  [9, 6],
  [2, 2],
  [2, 6],
];

positions = [
  [50, 47],
  [95, 48],
  [88, 77],
  [84, 3],
  [53, 87],
  [98, 79],
  [88, 28],
  [13, 22],
  [53, 73],
  [85, 55],
];

let res = fallingSquares(positions);

console.log(res);
