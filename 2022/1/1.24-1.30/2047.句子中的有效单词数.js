/*
 * @lc app=leetcode.cn id=2047 lang=javascript
 *
 * [2047] 句子中的有效单词数
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  let count = 0
  let wordList = sentence.split(" ")
  for (let w of wordList) {
    if (!w.length) continue
    if (w.match(/(!|\.|,).+/)) continue
    if (w.match(/^-|[^a-z]-|-[^a-z]|[a-z](-[a-z]+){2,}|-$/)) continue
    if (w.match(/[0-9]/)) continue
    count++
  }
  return count
}
// @lc code=end

var sentence = "!this  -s s- - b8d!"
sentence = "he bought 2 pencils, 3 erasers, and 1  pencil-sharpener."
sentence = "alice and  bob are playing stone-game10"
sentence = "a-a-c"
sentence =
  "  r3  6bb!f el49 jq.law3  q vju5dg0 .mcxq54jjz a6 n az 8 9bbxyivnrbb g .c8  d e xy29upl var b  7! yqs z 10m t qm  .t3i8e2lp3- xf d pd.   t yy9rk4y, 8, 7 mxl-sn-n  etk.5n va d.pym3..ri0 g9a.dgz0k 5qqxs!a s    46csnc u ima p    "
console.log(countValidWords(sentence))
