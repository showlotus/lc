/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let res = []
  let left = ['(', '{', '[']
  let right = [')', '}', ']']
  for (let i = 0; i < s.length; i++) {
    if (left.includes(s[i])) {
      res.push(s[i])
    } else {
      let t = right.indexOf(s[i])
      if (left[t] === res[res.length - 1]) {
        res.pop()
      } else {
        return false
      }
    }
  }
  return !res.length
}

let s = '()'
s = "()[]{}"
// s = "(]"
// s = '('
// s = "([)]"
// s = '[]'

console.log(isValid(s))
