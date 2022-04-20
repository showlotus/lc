/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  // 统计单词
  let words = paragraph.match(/\w+/g);

  // 过滤掉禁用词
  words = words.filter(v => {
    let lowerV = v.toLowerCase();
    return !banned.includes(lowerV);
  });

  let map = new Map();
  let max = 1;

  // 统计单词频数
  words.forEach(w => {
    let t = w.toLowerCase();
    if (map.has(t)) {
      let cnt = map.get(t) + 1;
      map.set(t, cnt);
      max = Math.max(max, cnt);
    } else {
      map.set(t, 1);
    }
  });

  for (let [w, v] of map.entries()) {
    if (v === max) {
      return w;
    }
  }
};
// @lc code=end
var paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
banned = [];

// paragraph = "a.";
// paragraph = "abc abc? abcd the jeff!";
// banned = ["abc", "abcd", "jeff"];

console.log(mostCommonWord(paragraph, banned));
