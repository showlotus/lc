/*
 * @lc app=leetcode.cn id=1544 lang=javascript
 *
 * [1544] 整理字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let left = 0;
  let right = 1;
  let arr = s.split('');
  while (right < arr.length) {
    if (Math.abs(arr[left].codePointAt(0) - arr[right].codePointAt(0)) === 32) {
      arr.splice(left, 2);
      left = left - 1 > 0 ? left - 1 : 0;
      right = left + 1;
    } else {
      ++left;
      ++right;
    }
  }
  return arr.join('');
};
// @lc code=end
var s = 'abBAcC'
console.log(makeGood(s))
console.log('e'.codePointAt(0), 'E'.codePointAt(0))
console.log('a'.codePointAt(0), 'A'.codePointAt(0))
