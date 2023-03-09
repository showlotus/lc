/*
 * @lc app=leetcode.cn id=2379 lang=javascript
 *
 * [2379] 得到 K 个黑块的最少涂色次数
 */

// @lc code=start
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let res = 0
  let cnt = 0
  for (let i = 0; i < k; i++) {
    cnt += blocks[i] === "W" ? 1 : 0
  }
  res = cnt
  for (let i = k; i < blocks.length; i++) {
    cnt += blocks[i] === "W" ? 1 : 0
    cnt += blocks[i - k] === "W" ? -1 : 0
    res = Math.min(res, cnt)
  }
  return res
}
// @lc code=end
let blocks = "WBBWWBBWBW"
let k = 7

blocks = "WBWBBBB"
k = 6

const res = minimumRecolors(blocks, k)
console.log(res)
