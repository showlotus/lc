/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let map = new Map()
  score.forEach((t, i) => {
    map.set(t, i)
  })
  score.sort((a, b) => b - a)
  score.forEach((t, i) => {
    let ranks = ''
    if (i === 0) {
      ranks = "Gold Medal"
    } else if (i === 1) {
      ranks = "Silver Medal"
    } else if (i === 2) {
      ranks = 'Bronze Medal'
    } else {
      ranks = (i + 1).toString()
    }
    map.set(t, [map.get(t), ranks])
  })
  let res = Array.from(map.values()).sort((a, b) => a[0] - b[0])
  return res.map(v => v[1])
};
// @lc code=end

let score = [5, 6, 4, 3, 2, 1]
// score = [10, 3, 8, 9, 4]
// score = [1]

console.log(findRelativeRanks(score))
