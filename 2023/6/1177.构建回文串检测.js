/*
 * @lc app=leetcode.cn id=1177 lang=javascript
 *
 * [1177] 构建回文串检测
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
  // 异或的运算法则：自反
  // a ⊕ b ⊕ a = b
  // 也即：a ⊕ b = c, c ⊕ b = a

  // 由于字串可重新排列，则替换 k 项后可构成回文串的条件取决于字串中每个字符出现次数的奇偶
  // 如果为偶数，则必然可构成回文串
  // 如果为奇数，可以想一想，只需要处理那个未成对的那个字符即可
  // 比如 aaa，前两个 aa 是可以构成回文串的，只需要考虑最后一个 a
  // 那也就是对于所有出现次数为奇数的字符，最终处理的数据是：它们的种类个数 m
  // 那么如何将 m 与 k 建立联系？
  // 对于 m 个不同字符，最少替换多少次可以构成回文串
  // 若 m 为偶数，则最少替换 m / 2 次
  // 若 m 为奇数，则最少替换 (m - 1) / 2 次
  const n = s.length
  const count = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    count[i + 1] = count[i] ^ (1 << (s[i].charCodeAt(0) - "a".charCodeAt(0)))
  }

  const res = []
  for (const [left, right, k] of queries) {
    let currCount = count[right + 1] ^ count[left]
    let bits = 0
    while (currCount > 0) {
      bits += currCount & 1
      currCount = currCount >> 1
    }
    // bits 与 k 作比较
    res.push(bits <= k * 2 + 1)
  }

  return res
}

// @lc code=end
let s = "abcda"
let queries = [
  [3, 3, 0],
  [1, 2, 0],
  [0, 3, 1],
  [0, 3, 2],
  [0, 4, 1]
]

s = "aabaa"
queries = [[1, 3, 0]]

const res = canMakePaliQueries(s, queries)
console.log(res)
