/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let len = num.length;
  let stack = [num[0]];
  let total = len - k;
  for (let i = 1; i < len; ++i) {
    while (k > 0 && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }
  let res = "";
  let i = 0;
  while (stack[i] === "0") {
    i++;
  }
  for (; i < total; ++i) {
    res += stack[i];
  }
  return res || "0";
};
// @lc code=end
var num = "1432212345",
  k = 5;
// (num = "10"), (k = 2);
// (num = "1432219"), (k = 3);
(num = "10"), (k = 1);
(num = "100200"), (k = 10);

console.log(removeKdigits(num, k));
