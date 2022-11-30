/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  // 贪心双指针
  let res = [];
  let left = 0;
  let right = s.length;
  for (let o of s) {
    if (o === "I") {
      res.push(left++);
    } else {
      res.push(right--);
    }
  }
  return res.concat(left);
};
// @lc code=end
var s = "IDID";
s = "III";
s = "DDI";
s = "IDIDDDIID";
console.log(diStringMatch(s));
