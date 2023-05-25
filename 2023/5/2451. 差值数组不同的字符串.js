/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
  const map = new Map()
  for (let i = 0; i < words.length; i++) {
    const diff = convert2Diff(words[i])
    // 用一个 map 记录当前字符的索引以及转为 diff 后的出现次数
    // [i, nums] 用一个数组存储，第一个值为索引，第二个值为出现次数
    if (!map.has(diff)) {
      map.set(diff, [i, 1])
    } else {
      map.set(diff, map.get(diff)[1] + 1)
    }
    // 遍历到第 3 个字符，并且当前 map 的大小等于 2
    // map 中 diff 数量为 1 的键即为目标字符的 diff
    if (i >= 2 && map.size === 2) {
      for (const [key, val] of map.entries()) {
        if (val[1] === 1) {
          return words[map.get(key)[0]]
        }
      }
    }
  }
}

const convert2Diff = str => {
  let seq = ""
  for (let i = 0; i <= str.length - 2; i++) {
    seq += str[i + 1].charCodeAt(0) - str[i].charCodeAt(0)
    if (i !== str.length - 2) {
      seq += ","
    }
  }
  return seq
}

let words = ["adc", "wzy", "abc"]
// words = ["aaa", "bob", "ccc", "ddd"]
words = ["ddd", "poo", "baa", "onn"]
words = ["abm", "bcn", "alm"]

const res = oddString(words)
console.log(res)
