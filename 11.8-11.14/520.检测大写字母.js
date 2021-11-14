/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.toUpperCase() === word) return true
  return word.slice(1).toLowerCase() === word.slice(1)
};

var word = 'USA'
word = 'Usa'
word = 'uSa'
word = "FlaG"
console.log(detectCapitalUse(word))
