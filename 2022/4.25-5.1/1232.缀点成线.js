/*
 * @lc app=leetcode.cn id=1232 lang=javascript
 *
 * [1232] 缀点成线
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  // 起点
  let [startX, startY] = coordinates[0];
  let len = coordinates.length;

  // 计算偏移量
  for (let i = 1; i < len; i++) {
    coordinates[i][0] -= startX;
    coordinates[i][1] -= startY;
  }

  // 直线方程
  let a = coordinates[1][0];
  let b = coordinates[1][1];

  for (let i = 2; i < len; i++) {
    let [x, y] = coordinates[i];
    if (a * y !== b * x) {
      return false;
    }
  }
  return true;
};
// @lc code=end

var coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [0, 1],
];

coordinates = [
  [1, 1],
  [2, 2],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 7],
];

// coordinates = [
//   [1, 2],
//   [2, 3],
//   [3, 5],
// ];

// coordinates = [
//   [0, 0],
//   [0, 1],
//   [0, -1],
// ];

// coordinates = [
//   [2, 4],
//   [2, 5],
//   [2, 8],
// ];

// coordinates = [
//   [2, 4],
//   [3, 4],
//   [5, 4],
// ];

// coordinates = [
//   [0, 0],
//   [0, 5],
//   [5, 0],
//   [1337, 0],
//   [0, 1337],
// ];

console.log(checkStraightLine(coordinates));
