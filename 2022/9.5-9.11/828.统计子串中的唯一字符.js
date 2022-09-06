/*
 * @lc app=leetcode.cn id=828 lang=javascript
 *
 * [828] 统计子串中的唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function (s) {
  const map = new Map()
  // 预处理
  const n = s.length
  for (let i = 0; i < n; i++) {
    const c = s[i]
    if (!map.has(c)) {
      map.set(c, [-1])
    }
    map.get(c).push(i)
  }

  let res = 0
  for (const arr of map.values()) {
    arr.push(n)
    for (let i = 1; i < arr.length - 1; i++) {
      res += (arr[i] - arr[i - 1]) * (arr[i + 1] - arr[i])
    }
  }
  return res
}
// @lc code=end
var s = "LEETCODE"

console.log(uniqueLetterString(s))
