/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  const n = words.length
  const preSum = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    preSum[i + 1] =
      preSum[i] +
      (isVowelChar(words[i][0]) && isVowelChar(words[i][words[i].length - 1])
        ? 1
        : 0)
  }
  return queries.map(([i, j]) => preSum[j + 1] - preSum[i])
}

const isVowelChar = s => /^[aeiou]$/.test(s)

let words = ["aba", "bcb", "ece", "aa", "e"]
let queries = [
  [0, 2],
  [1, 4],
  [1, 1]
]

words = ["a", "e", "i"]
queries = [
  [0, 2],
  [0, 1],
  [2, 2]
]

const res = vowelStrings(words, queries)
console.log(res)
