/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const baseMap = genNumsMap(words[0])
  for (let i = 1; i < words.length; i++) {
    const map = genNumsMap(words[i])
    for (const key of baseMap.keys()) {
      if (!map.has(key)) {
        baseMap.delete(key)
      } else {
        baseMap.set(key, Math.min(baseMap.get(key), map.get(key)))
      }
    }
  }
  return Array.from(baseMap.entries())
    .map(([key, val]) => new Array(val).fill(key))
    .flat()
}

const genNumsMap = str => {
  const map = new Map()
  for (const char of str) {
    map.set(char, (map.get(char) || 0) + 1)
  }
  return map
}

let words = ["bella", "label", "roller"]
words = ["cool", "lock", "cook"]
words = ["abc"]

const res = commonChars(words)
console.log(res)
