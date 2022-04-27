/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let arr = [...s]
  let i = 0
  let j = arr.length - 1
  while (i < j) {
    while (!/[a-zA-Z]/.test(arr[i]) && i < j) {
      i++
    }
    while (!/[a-zA-Z]/.test(arr[j]) && i < j) {
      j--
    }
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j--
  }
  return arr.join("")
}
// @lc code=end
var s = "ab-cd"
s = "a-bC-dEf-ghIj"
s = "Test1ng-Leet=code-Q!"
s = "ab"
s = "?6C40E"
console.log(reverseOnlyLetters(s))
