/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ")
}

var reverseWords2 = function (s) {
  // 双指针
  // 1. 移除多余的空格
  s = removeExtraSpaces([...s])

  // 2. 反转字符串
  reverseStr(s)

  // 3. 将单词反转
  for (let i = 0; i < s.length; i++) {
    const k = i
    let j = i
    while (j < s.length && s[j] !== " ") {
      j++
    }
    i = j
    reverseStr(s, k, j - 1)
  }

  return s.join("")
}

/**
 * 移除多余的空格（头尾以及单词间的）
 * @param {string[]} s
 * @returns {string[]}
 */
const removeExtraSpaces = s => {
  let slow = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      // 在每个单词后添加一个空格
      if (slow !== 0) s[slow++] = " "
      while (i < s.length && s[i] !== " ") {
        s[slow++] = s[i++]
      }
    }
  }
  s.length = slow
  return s
}

/**
 * 反转字符串
 * @param {string[]} s
 * @param {number} startIdx 开始索引
 * @param {number} endIdx 结束索引
 */
const reverseStr = (s, startIdx = 0, endIdx = s.length - 1) => {
  while (startIdx < endIdx) {
    const tmp = s[startIdx]
    s[startIdx] = s[endIdx]
    s[endIdx] = tmp
    startIdx++
    endIdx--
  }
}

let s = "the sky is blue"
s = "  hello   world  "
s = "a good   example"

const res = reverseWords2(s)
console.log(res)
