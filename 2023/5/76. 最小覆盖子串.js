/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s === t) return s
  if (s.length < t.length) return ""

  const targetMap = new Map()
  for (const char of t) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1)
  }

  let i = 0
  let startIdx = -1
  let minLength = Number.MAX_VALUE
  const countMap = new Map()

  const isContains = () => {
    if (countMap.size < targetMap.size) return false
    for (const [key, val] of targetMap.entries()) {
      if (!countMap.has(key) || countMap.get(key) < val) {
        return false
      }
    }
    return true
  }

  for (let j = 0; j < s.length; j++) {
    countMap.set(s[j], (countMap.get(s[j]) || 0) + 1)
    while (targetMap.has(s[j]) && isContains()) {
      if (j - i + 1 < minLength) {
        minLength = j - i + 1
        startIdx = i
      }
      countMap.set(s[i], countMap.get(s[i]) - 1)
      if (countMap.get(s[i]) === 0) {
        countMap.delete(s[i])
      }
      ++i
    }
  }
  return startIdx === -1 ? "" : s.slice(startIdx, startIdx + minLength)
}

let s = "ADOBECODEBANC"
let t = "ABC"

s = "a"
t = "a"

s = "a"
s = "b"

s = "a"
t = "aa"

const res = minWindow(s, t)
console.log(res)
