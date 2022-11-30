/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  if (s1.length !== s2.length) return false
  const n = s1.length
  const map = new Map()
  for (let i = 0; i < n; i++) {
    const char1 = s1[i]
    const char2 = s2[i]
    map.set(char1, (map.get(char1) || 0) + 1)
    if (map.get(char1) === 0) {
      map.delete(char1)
    }

    map.set(char2, (map.get(char2) || 0) - 1)
    if (map.get(char2) === 0) {
      map.delete(char2)
    }
  }
  return map.size === 0
}

let s1 = "abc",
  s2 = "bca"
;(s1 = "abc"), (s2 = "bac")
;(s1 = "abc"), (s2 = "baca")
;(s1 = ""), (s2 = "")
let res = CheckPermutation(s1, s2)
console.log(res)
