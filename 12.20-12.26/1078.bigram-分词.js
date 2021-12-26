/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  let reg = /(?<=(^a\s|\sa\s)good\s)\w[^\s]*/g // ES6新语法 ?<= 
  let regStr = new RegExp(`\(?<=\(^${first}\\s\|\\s${first}\\s)${second}\\s\)\\w\[^\\s\]\*`, 'g')
  let res = text.match(regStr)
  return res ? res : []
};
// @lc code=end

var text = "a good alice is a good girl she is a good student",
  first = "a",
  second = "good"

text = "we will we will rock you", first = "we", second = "will"

// text = "alice is aa good girl she is a good student"
// first = "a"
// second = "good"

text = 'we we we we'
first = 'we'
second = 'we'

console.log(findOcurrences(text, first, second))
