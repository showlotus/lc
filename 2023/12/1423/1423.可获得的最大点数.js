/*
 * @lc app=leetcode.cn id=1423 lang=javascript
 *
 * [1423] 可获得的最大点数
 */

// @lc code=start
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  const n = cardPoints.length
  const windowSize = n - k
  const totalScore = cardPoints.reduce((sum, curr) => sum + curr, 0)
  if (windowSize === 0) {
    return totalScore
  }

  // 初始化窗口分数
  let score = 0
  for (let i = 0; i < windowSize; i++) {
    score += cardPoints[i]
  }

  let minScore = score
  for (let i = windowSize; i < n; i++) {
    score += cardPoints[i] - cardPoints[i - windowSize]
    minScore = Math.min(minScore, score)
  }

  return totalScore - minScore
}
// @lc code=end
export { maxScore }
