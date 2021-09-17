/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // let count = 0;
  // let end = s.length - 1;
  // while (s[end] === ' ' && end >= 0) --end;
  // while (end >= 0 && s[end--] !== ' ') ++count;
  // return count;
  return s.trim().split(' ').pop().length;
};
// @lc code=end

var s = "hello world    ";
console.log(lengthOfLastWord(s))
