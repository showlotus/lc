/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let map = new Map()
  for (let i = 0, j = 9; i < s.length, j < s.length; i++, j++) {
    let str = s.slice(i, j + 1)
    if (map.has(str)) {
      map.set(str, map.get(str) + 1)
    } else {
      map.set(str, 1)
    }
  }
  let res = []
  for (let [key, value] of map.entries()) {
    if (value > 1) {
      res.push(key)
    }
  }
  return res
}

let s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

s = "AAAAAAAAAAAAA"
s = "AAAAA"

console.log(findRepeatedDnaSequences(s))
