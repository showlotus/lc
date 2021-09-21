/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let cnt = 0
  let i = 0
  let j = s.length - 1
  while (i < j) {
    if (s[i] === s[j]) {
      i++
      j--
    } else if (cnt < 1) {
      cnt++
      j--
    } else {
      break
    }
  }
  i = 0
  j = s.length - 1
  cnt = 0
  while (i < j) {
    if (s[i] === s[j]) {
      i++
      j--
    } else if (cnt < 1) {
      i++
      cnt++
    } else {
      return false
    }
  }
  return true
};

let s = "abbba"
s = "aaaaaaaac"
s = 'abca'
s = "abbbbbbb"

console.log(validPalindrome(s))
