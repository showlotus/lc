/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const needMap = new Map()
  for (const char of t) {
    // 记录每个目标字符所需个数
    needMap.set(char, (needMap.get(char) || 0) + 1)
  }

  let i = 0
  let startIdx = 0
  let minLength = Number.MAX_VALUE
  // 总所需字符数
  let needCnt = t.length
  // 遍历源字符串
  for (let j = 0; j < s.length; j++) {
    // 如果当前字符为目标字符，将总所需字符数减一
    if (needMap.get(s[j]) > 0) {
      needCnt--
    }
    // 同时更新 Map 中对应字符的所需个数，即减一
    // 非目标字符的所需个数为负数
    needMap.set(s[j], (needMap.get(s[j]) || 0) - 1)
    // 如果总所需字符数为 0，说明当前区间 [i, j] 为一个可行区间
    // 接下来尝试缩小区间，即增加 i 的值
    if (needCnt === 0) {
      // 如果字符 s[i] 的所需个数小于 0，说明该字符为多余字符，可以从当前区间中移除
      while (needMap.get(s[i]) < 0) {
        // 更新 s[i] 的所需个数
        needMap.set(s[i], needMap.get(s[i]) + 1)
        // 缩小区间，增加 i
        i++
      }
      // 上面循环结束后，s[i] 的所需个数为 0，即这是一个必备字符
      // 已经达到当前区间的最小限制了，这时可以更新 minLength 和 startIdx
      if (j - i + 1 < minLength) {
        minLength = j - i + 1
        startIdx = i
      }
      // 调整区间，增加 i，继续找下一个符合条件的区间
      // s[i] 所需个数加一（原本就是 0，直接赋值为 1 就行），i 加一，needCnt 加一
      needMap.set(s[i], 1)
      needCnt++
      i++
    }
  }
  return minLength === Number.MAX_VALUE
    ? ""
    : s.slice(startIdx, startIdx + minLength)
}

let s = "ADOBECODEBANC"
let t = "ABC"

// s = "a"
// t = "a"

// s = "aa"
// t = "aa"

// s = "a"
// s = "b"

const res = minWindow(s, t)
console.log(res)
