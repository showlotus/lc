/*
 * @lc app=leetcode.cn id=1441 lang=javascript
 *
 * [1441] 用栈操作构建数组
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const res = []
  for (let i = 1, j = 0; j < target.length; ) {
    if (target[j] === i) {
      res.push("Push")
      j++
    } else {
      res.push("Push", "Pop")
    }
    i++
  }
  return res
}
// @lc code=end
let target = [1, 3]
let n = 3
;(target = [1, 2, 3]), (n = 3)
;(target = [1, 2]), (n = 4)

let res = buildArray(target, n)
console.log(res)
