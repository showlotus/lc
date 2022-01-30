/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  let arr = s1.split(" ")
  arr.push(...s2.split(" "))
  return arr.filter(word => arr.indexOf(word) === arr.lastIndexOf(word))
}
// @lc code=end
var s1 = "this apple is sweet",
  s2 = "this apple is sour"
;(s1 = "apple apple"), (s2 = "banana")
console.log(uncommonFromSentences(s1, s2))
