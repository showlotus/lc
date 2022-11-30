/*
 * @lc app=leetcode.cn id=1346 lang=javascript
 *
 * [1346] 检查整数及其两倍数是否存在
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  arr.sort((a, b) => a - b);
  let len = arr.length;
  let q = 0;
  for (let d = 0; d < len; d++) {
    while (q < len && arr[d] * 2 > arr[q]) {
      q++;
    }
    if (q < len && q !== d && arr[d] * 2 === arr[q]) {
      return true;
    }
  }

  q = len - 1;
  for (let d = len - 1; d >= 0; d--) {
    while (q >= 0 && arr[d] * 2 < arr[q]) {
      q--;
    }
    if (q >= 0 && q !== d && arr[d] * 2 === arr[q]) {
      return true;
    }
  }

  return false;
};

// @lc code=end
var checkIfExist_map = function (arr) {
  let map = new Map();
  for (let v of arr) {
    if (map.has(v * 2) || map.has(v / 2)) {
      return true;
    } else {
      map.set(v, 1);
    }
  }
  return false;
};

var arr = [10, 2, 5, 3];
arr = [7, 1, 14, 11];
arr = [3, 1, 7, 11, 0, 0];
// arr = [2, 1];
// arr = [-8, -3, -2, -1, 0, 2, 3, 4, -4, 6];
console.log(checkIfExist(arr));
