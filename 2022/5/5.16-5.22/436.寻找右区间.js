/*
 * @lc app=leetcode.cn id=436 lang=javascript
 *
 * [436] 寻找右区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  let map = new Map(intervals.map((v, i) => [v[0], i]));

  intervals.sort((a, b) => a[0] - b[0]);
  const len = intervals.length;
  const res = [];

  intervals.forEach((v, i) => {
    let left = i;
    let right = len - 1;

    // 判定区间 left <= right，最终 left >= target
    while (left <= right) {
      let mid = left + ((right - left) >> 1);
      const start = intervals[mid][0];
      if (start < v[1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    const sourceIdx = map.get(v[0]);
    if (left < len) {
      res[sourceIdx] = map.get(intervals[left][0]);
    } else {
      res[sourceIdx] = -1;
    }
  });

  return res;
};
// @lc code=end
var intervals = [
  [3, 4],
  [2, 3],
  [1, 2],
];
intervals = [[1, 2]];
intervals = [
  [1, 4],
  [2, 3],
  [3.2, 4],
  [4.1, 4],
];
console.log(findRightInterval(intervals));
