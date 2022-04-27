/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let res = letters[0];
  for (let word of letters) {
    if (word > target) {
      res = word;
      break;
    }
  }
  return res;
};
// @lc code=end
var letters = ["c", "f", "j"],
  target = "a";
(letters = ["c", "f", "j"]), (target = "c");
(letters = ["c", "f", "j"]), (target = "d");
(letters = ["c", "f"]), (target = "z");
console.log(nextGreatestLetter(letters, target));
