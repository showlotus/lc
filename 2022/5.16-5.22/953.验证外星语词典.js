/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const dictionary = new Map([...order].map((v, i) => [v, i]));
  dictionary.set("", -1);
  const compare = (a, b) => {
    let aLen = a.length;
    let bLen = b.length;
    let i = 0;
    let j = 0;
    while (i < aLen || j < bLen) {
      const aOrder = dictionary.get(a.charAt(i++));
      const bOrder = dictionary.get(b.charAt(j++));
      if (aOrder < bOrder) {
        return true;
      } else if (aOrder > bOrder) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0, len = words.length; i < len - 1; i++) {
    if (!compare(words[i], words[i + 1])) {
      return false;
    }
  }
  return true;
};
// @lc code=end
var words = ["hello", "leetcode"];
var order = "hlabcdefgijkmnopqrstuvwxyz";
words = ["word", "world", "row"];
order = "worldabcefghijkmnpqstuvxyz";

words = ["apple", "apple"];
order = "abcdefghijklmnopqrstuvwxyz";
console.log(isAlienSorted(words, order));
