/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  let res = ""
  for (let i = 0; i < dictionary.length; ++i) {
    let m = 0
    let n = 0
    while (m < s.length && n < dictionary[i].length) {
      if (s[m] === dictionary[i][n]) {
        ++n
      }
      ++m
    }
    --m
    if (n === dictionary[i].length) {
      if (dictionary[i].length > res.length || (dictionary[i].length === res.length && dictionary[i] < res)) {
        res = dictionary[i]
      }
    }
  }
  return res
};

let s = "abpcplea"
let dictionary = ["ale", "apple", "monkey", "plea"]
s = 'abce'
// dictionary = ['abe', 'abc']
dictionary = ['a', 'b', 'c']

// s = "bab"
// dictionary = ['bac', 'acb', 'a', 'b']

console.log(findLongestWord(s, dictionary))
