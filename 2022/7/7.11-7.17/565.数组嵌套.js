/*
 * @lc app=leetcode.cn id=565 lang=javascript
 *
 * [565] 数组嵌套
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  let res = 0;
  const n = nums.length;
  const visited = new Array(n).fill(false);
  for (let i = 0; i < n; ++i) {
    let cnt = 0;
    while (!visited[i]) {
      visited[i] = true;
      i = nums[i];
      cnt++;
    }
    res = Math.max(res, cnt);
  }
  return res;
};
// @lc code=end

var arrayNesting_time_limit = function (nums) {
  let res = 0;
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    let map = new Map();
    let curr = nums[i];
    while (!map.has(curr)) {
      map.set(curr, 1);
      curr = nums[curr];
    }

    if (map.size > res) {
      res = map.size;
    }
  }

  return res;
};
var A = [5, 4, 0, 3, 1, 6, 2];
// A = [1, 0, 2];
var res = arrayNesting(A);

console.log(res);
