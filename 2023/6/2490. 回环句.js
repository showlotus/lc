/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  // 模拟题
  // 复杂度：O(N) O(1)
  const n = sentence.length
  for (let i = 0; i < n; i++) {
    while (i < n && sentence[i] !== " ") {
      i++
    }
    if (i < n) {
      if (sentence[i - 1] !== sentence[i + 1]) {
        return false
      }
    } else {
      return sentence[i - 1] === sentence[0]
    }
  }
}

let str = "leetcode exercises sound delightful"

str = "aaaabaa"
// str = "Leetcode is cool"
// str = "a a a a a"

const res = isCircularSentence(str)
console.log(res)
