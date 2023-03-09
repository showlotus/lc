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
  let res = k
  // 记录当前窗口黑色快的数量
  let blackBlocks = 0
  for (let i = 0; i < blocks.length; i++) {
    // 窗口长度大于 k 时，更新结果
    if (i >= k) {
      res = Math.min(res, k - blackBlocks)
      // 如果当前窗口的第一个为黑色块时，丢弃并将窗口的黑色块数量减一
      if (blocks[i - k] === "B") {
        blackBlocks--
      }
    }
    // 当前窗口的最后一个为黑色块时，将窗口的黑色块数量加一
    if (blocks[i] === "B") {
      blackBlocks++
    }
  }
  return Math.min(res, k - blackBlocks)
}
// @lc code=end
let blocks = "WBBWWBBWBW"
let k = 7

blocks = "WBWBBBB"
k = 4

const res = minimumRecolors(blocks, k)
console.log(res)
