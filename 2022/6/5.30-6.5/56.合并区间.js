/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  const isCanMerge = (arr1, arr2) => arr1[0] <= arr2[1] && arr2[0] <= arr1[1];
  for (let i = intervals.length - 1; i > 0; i--) {
    if (isCanMerge(intervals[i - 1], intervals[i])) {
      const start = Math.min(intervals[i - 1][0], intervals[i][0]);
      const end = Math.max(intervals[i - 1][1], intervals[i][1]);
      intervals[i - 1] = [start, end];
      intervals.splice(i, 1);
    }
  }
  return intervals;
};
// @lc code=end
var intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

// intervals = [
//   [1, 4],
//   [4, 5],
// ];

// intervals = [
//   [2, 3],
//   [4, 5],
//   [6, 7],
//   [8, 9],
//   [1, 10],
// ];

console.log(merge(intervals));
