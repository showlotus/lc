/*
 * @lc app=leetcode.cn id=564 lang=javascript
 *
 * [564] 寻找最近的回文数
 */

// @lc code=start
/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
  let len = n.length
  let list = [BigInt(10 ** (len - 1) - 1), BigInt(10 ** len + 1)]
  let selfPrefix = parseInt(n.substring(0, (len + 1) >> 1))
  for (let i = selfPrefix - 1; i <= selfPrefix + 1; i++) {
    let str = "" + i
    let suffix = [...str].reverse().join("")
    str += suffix.substring(len & 1)
    list.push(BigInt(str))
  }
  let t = BigInt(n)
  return list
    .filter(v => v !== t)
    .reduce((prev, curr) => {
      let i = prev - t
      i = i < 0 ? -i : i
      let j = curr - t
      j = j < 0 ? -j : j
      if (i > j) {
        return curr
      } else if (i === j) {
        return prev > curr ? curr : prev
      } else {
        return prev
      }
    })
    .toString()
}
// @lc code=end
var n = "123"
// n = "1"
// n = "1011"
// n = "100"
n = "1325060231"
// n = "807045053224792883"
console.log(nearestPalindromic(n))
// console.log(isPalindromicNum(1325060231))
// console.log(isPalindromicNum(1325055231))
// console.log(isPalindromicNum(1325100015231))
