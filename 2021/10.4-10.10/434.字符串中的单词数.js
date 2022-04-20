/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  /* 单词数 = 空格数 + 1 */
  if (s.length === 0) return 0
  let space = 0
  for (let i = 0; i < s.length; i++) {
    if (i === 0 && s[i] === ' ') {
      while (s[i] === ' ' && i < s.length) i++
    }
    if (s[i] === ' ') {
      while (s[i] === ' ' && i < s.length) i++
      space++
      i--
    }
  }
  if (s[s.length - 1] === ' ') space--
  return space + 1
};

var countSegments2 = function (s) {
  if (s.length === 0) return 0
  let words = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      while (s[i] !== ' ' && i < s.length) {
        i++
      }
      words++
    }
  }
  return words
};

let s = " Hello, my name is John    "

s = ' 112 '
s = ' 1 2 '
s = '     '

console.log(countSegments(s))
