/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let i = 0
  let len = bits.length
  while (i < len - 1) {
    i += bits[i] === 1 ? 2 : 1
  }
  return i === len - 1 && bits[i] === 0
}
// @lc code=end
var bits = [1, 0, 0]
bits = [1, 0, 1, 1, 0]
bits = [1, 1, 1, 0]
bits = [1, 0, 1, 0, 0]
console.log(isOneBitCharacter(bits))
