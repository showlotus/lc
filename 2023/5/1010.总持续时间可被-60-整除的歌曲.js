/*
 * @lc app=leetcode.cn id=1010 lang=javascript
 *
 * [1010] 总持续时间可被 60 整除的歌曲
 */

// @lc code=start
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  // 找规律，a + b 之和能被 60 整除，可以转换为 a % 60 + b % 60 == 60
  // 那么解题思路就和两数之和类似，通过哈希表来解决该问题
  const counter = new Map()
  let res = 0
  for (const t of time) {
    const m = t % 60
    const n = (60 - m) % 60
    if (counter.has(n)) {
      res += counter.get(n)
    }
    counter.set(m, (counter.get(m) || 0) + 1)
  }
  return res
}
// @lc code=end
let time = [30, 20, 150, 100, 40]
time = [30, 30, 120, 60, 60]
time = [120, 60, 60]

const res = numPairsDivisibleBy60(time)
console.log(res)
