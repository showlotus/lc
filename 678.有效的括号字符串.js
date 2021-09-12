/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  // * 贪心，T: O(n), S: O(1)
  /* let minCount = 0
  let maxCount = 0
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '(') {
      ++minCount
      ++maxCount
    } else if (s[i] === ')') {
      minCount = Math.max(minCount - 1, 0)
        --maxCount
      if (maxCount < 0) return false
    } else {
      minCount = Math.max(minCount - 1, 0)
        ++maxCount
    }
  }
  return minCount === 0 */
  // * 栈
  let left = []
  let wildcard = []
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '(') {
      left.push(i)
    } else if (s[i] === '*') {
      wildcard.push(i)
    } else {
      if (left.length) {
        left.pop()
      } else if (wildcard.length) {
        wildcard.pop()
      } else {
        return false
      }
    }
  }

  if (left.length > wildcard.length) return false
  while (left.length && wildcard.length) {
    let l = left.length - 1
    let w = wildcard.length - 1
    if (left[l] < wildcard[w]) {
      left.pop()
      wildcard.pop()
    } else {
      return false
    }
  }
  return true
};

let str = "()((((****"
console.log(checkValidString(str))
