/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let rows = 1;
  let currLines = 0;
  for (let word of s) {
    let currUnit = widths[word.codePointAt(0) - "a".codePointAt(0)];
    if (currLines + currUnit > 100) {
      currLines = currUnit;
      rows++;
    } else {
      currLines += currUnit;
    }
  }
  return [rows, currLines];
};
// @lc code=end
var widths = [
  4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10,
];
var S = "bbbcccdddaaa";

widths = [
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10,
];
S = "abcdefghijklmnopqrstuvwxyz";
S = "abcdefg";

console.log(numberOfLines(widths, S));
