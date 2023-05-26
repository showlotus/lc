/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  s = [...s]
  reverseStr(s, 0, n - 1)
  reverseStr(s, n)
  reverseStr(s)
  return s.join("")
}

/**
 *
 * @param {string[]} s
 * @param {number} startIdx
 * @param {number} endIdx
 */
const reverseStr = (s, startIdx = 0, endIdx = s.length - 1) => {
  while (startIdx < endIdx) {
    const tmp = s[startIdx]
    s[startIdx] = s[endIdx]
    s[endIdx] = tmp
    startIdx++
    endIdx--
  }
}

let s = "abcdefg"
let n = 2

s = "lrloseumgh"
n = 6

const res = reverseLeftWords(s, n)
console.log(res)
