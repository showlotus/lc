/*
 * @lc app=leetcode.cn id=2024 lang=javascript
 *
 * [2024] 考试的最大困扰度
 */

// @lc code=start
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  return Math.max(maxConsecutiveLength(answerKey, k, "T"), maxConsecutiveLength(answerKey, k, "F"))
}

var maxConsecutiveLength = (answerKey, k, str) => {
  let sum = 0
  let res = 0
  for (let i = 0, j = 0, len = answerKey.length; j < len; j++) {
    sum += answerKey[j] !== str ? 1 : 0
    while (k < sum) {
      sum -= answerKey[i++] !== str ? 1 : 0
    }
    res = Math.max(res, j - i + 1)
  }
  return res
}
// @lc code=end
var answerKey = "TTFTTFTT",
  k = 1
;(answerKey = "TFFT"), (k = 1)
;(answerKey = "TTFF"), (k = 2)

console.log(maxConsecutiveAnswers(answerKey, k))
