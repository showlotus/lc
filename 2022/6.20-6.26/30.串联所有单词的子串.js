/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const m = s.length
  const n = words.length
  const wLen = words[0].length
  const res = []
  const pattern = new RegExp(`(?:\\w{${wLen}})+?`, "g")
  for (let i = 0; i <= m - n; ++i) {
    let list = s.slice(i).match(pattern)
    if (!list || list.length < n) {
      break
    }
    const differ = new Map()
    // 设置窗口默认值
    for (let j = 0; j < n; ++j) {
      const w = list[j]
      differ.set(w, (differ.get(w) || 0) + 1)
    }

    // 移除窗口中已包含的单词
    for (let j = 0; j < n; ++j) {
      const w = words[j]
      differ.set(w, (differ.get(w) || 0) - 1)
      if (differ.get(w) === 0) {
        differ.delete(w)
      }
    }

    for (let start = 0, len = list.length; start + n - 1 < len; ++start) {
      if (start !== 0) {
        const prevWord = list[start - 1]
        const newWord = list[start + n - 1]
        differ.set(prevWord, (differ.get(prevWord) || 0) - 1)
        differ.set(newWord, (differ.get(newWord) || 0) + 1)
      }
      // 判断窗口是否为空，若为空则符合要求
      if (differ.size === 0) {
        res.push(i)
      }
    }
  }
  return res
}
// @lc code=end
var s = "barfoothefoobarman"
var words = ["foo", "bar"]

s = "barfoofoobarthefoobarman"
words = ["bar", "foo", "the"]

// words = ["foob"]

// s = "wordgoodgoodgoodbestword"
// words = ["word", "good", "best", "word"]

let res = findSubstring(s, words)
console.log(res)
