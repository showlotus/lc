/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let map = new Map();
  for (let w of s) {
    if (map.has(w)) {
      map.set(w, map.get(w) + 1);
    } else {
      map.set(w, 1);
    }
  }
  let stack = [];
  for (let w of s) {
    if (stack.includes(w)) {
      map.set(w, map.get(w) - 1);
      continue;
    }
    while ((len = stack.length) && (last = stack[len - 1]) > w && map.get(last) > 1) {
      stack.pop();
      map.set(last, map.get(last) - 1);
    }

    stack.push(w);
  }

  return stack.join("");
};
// @lc code=end
var s = "cbacdcbc";
s = "bcabc";
s = "aabb";
s = "abeacb";
s = "b";
// s = "cbaddabaa";
// s = "abacb";
console.log(removeDuplicateLetters(s));
