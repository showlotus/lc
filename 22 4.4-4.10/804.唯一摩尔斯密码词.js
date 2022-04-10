/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
const list = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];
var uniqueMorseRepresentations = function (words) {
  let map = new Map();
  words.forEach(w => {
    let password = "";
    for (let s of w) {
      password += list[s.codePointAt(0) - "a".codePointAt(0)];
    }
    if (!map.has(password)) {
      map.set(password, 1);
    }
  });
  return map.size;
};
// @lc code=end
var words = ["gin", "zen", "gig", "msg"];
words = ["a", "b"];

console.log(uniqueMorseRepresentations(words));
