/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Map()
  let maxlen = 0
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      maxlen = Math.max(map.size, maxlen)
      i = map.get(s[i])
      map.clear()
    } else {
      map.set(s[i], i)
    }
  }
  return Math.max(map.size, maxlen)
};

let s = 'abcabcbb'
s = 'bbbb'
s = ''
s = 'pwwkew'
s = ' '

console.log(lengthOfLongestSubstring(s))
