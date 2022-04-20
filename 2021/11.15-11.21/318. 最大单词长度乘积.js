/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  var res = 0
  var temp = new Array(words.length)
  words.forEach((item, i) => {
    var Int32 = new Array(32).fill(0);
    [...item].forEach(word => {
      Int32[31 - (word.charCodeAt(0) - 'a'.charCodeAt(0))] = 1
    })
    temp[i] = parseInt(Int32.join(''), 2)
  })
  temp.forEach((item, i) => {
    for (let j = i + 1; j < temp.length; j++) {
      if ((item & temp[j]) === 0) {
        res = Math.max(res, words[i].length * words[j].length)
      }
    }
  })
  return res
}


var words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
words = ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
words = ["a", "aa", "aaa", "aaaa"]
console.log(maxProduct(words))
