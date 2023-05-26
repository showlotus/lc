/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1)
    map.set(t[i], (map.get(t[i]) || 0) - 1)
    if (map.get(t[i]) === 0) {
      map.delete(t[i])
    }
    if (map.get(s[i]) === 0) {
      map.delete(s[i])
    }
  }
  return map.size === 0
}

let s = "anagram"
let t = "nagaram"

// s = "rat"
// t = "car"

// s = "ab"
// t = "ba"

const res = isAnagram(s, t)
console.log(res)
